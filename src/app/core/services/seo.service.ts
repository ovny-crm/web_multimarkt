import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private titleService: Title, 
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  updateTitle(title: string) {
    this.titleService.setTitle(title);
  }

  updateCanonicalUrl(url: string) {
    let head = this.document.getElementsByTagName('head')[0];
    let element: HTMLLinkElement | null = this.document.querySelector(`link[rel='canonical']`) || null;
    if (element === null) {
      element = this.document.createElement('link');
      element.setAttribute('rel', 'canonical');
      head.appendChild(element);
    }
    element.setAttribute('href', url);
  }

  updateStructuredData(data: any) {
    let head = this.document.getElementsByTagName('head')[0];
    let script: HTMLScriptElement | null = this.document.querySelector(`script[type='application/ld+json'].dynamic-sd`) || null;
    if (script === null) {
      script = this.document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('class', 'dynamic-sd');
      head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }

  updateMetaTags(config: { title?: string; description?: string; image?: string; url?: string }) {
    if (config.title) {
      this.metaService.updateTag({ name: 'title', content: config.title });
      this.metaService.updateTag({ property: 'og:title', content: config.title });
      this.metaService.updateTag({ name: 'twitter:title', content: config.title });
    }

    if (config.description) {
      this.metaService.updateTag({ name: 'description', content: config.description });
      this.metaService.updateTag({ property: 'og:description', content: config.description });
      this.metaService.updateTag({ name: 'twitter:description', content: config.description });
    }

    if (config.image) {
      this.metaService.updateTag({ property: 'og:image', content: config.image });
      this.metaService.updateTag({ name: 'twitter:image', content: config.image });
    }

    if (config.url) {
      this.metaService.updateTag({ property: 'og:url', content: config.url });
      this.updateCanonicalUrl(config.url);
    }
  }
}
