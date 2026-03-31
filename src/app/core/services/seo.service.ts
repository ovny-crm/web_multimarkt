import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private document = inject(DOCUMENT);

  // Backward compatibility
  updateTitle(title: string) {
    this.updateTags({ title, description: '' });
  }

  updateMetaTags(config: { description?: string; keywords?: string; url?: string; image?: string }) {
    const currentTitle = this.titleService.getTitle().replace(' | Multi-Markt', '');
    this.updateTags({
      title: currentTitle,
      description: config.description || '',
      keywords: config.keywords,
      url: config.url,
      image: config.image
    });
  }

  updateStructuredData(jsonLd: any) {
    this.setStructuredData(jsonLd);
  }

  updateTags(config: SeoConfig) {
    const title = config.title.includes('Multi-Markt') ? config.title : `${config.title} | Multi-Markt`;
    this.titleService.setTitle(title);

    // Standard Tags
    this.metaService.updateTag({ name: 'description', content: config.description });
    if (config.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: config.keywords });
    }

    // Open Graph
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    this.metaService.updateTag({ property: 'og:type', content: config.type || 'website' });
    if (config.image) {
      this.metaService.updateTag({ property: 'og:image', content: config.image });
    }
    if (config.url) {
      this.metaService.updateTag({ property: 'og:url', content: config.url });
    }

    // Twitter
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    this.metaService.updateTag({ name: 'twitter:description', content: config.description });

    this.updateCanonicalUrl(config.url);
  }

  private updateCanonicalUrl(url?: string) {
    const canonicalUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://multimarkt.ovny.net/');
    
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);
  }

  setStructuredData(jsonLd: any) {
    try {
      // Remove previous JSON-LD if any to avoid duplicates
      const existingScript = this.document.querySelector('script[type="application/ld+json"]#dynamic-seo-data');
      if (existingScript) {
        existingScript.remove();
      }

      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'dynamic-seo-data';
      script.text = JSON.stringify(jsonLd);
      this.document.head.appendChild(script);
    } catch (e) {
      console.error('Error setting structured data', e);
    }
  }
}
