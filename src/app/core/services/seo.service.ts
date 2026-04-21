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

  private readonly DEFAULT_IMAGE = 'https://multimarkt.ovny.net/assets/images/logo-planeta-multi-markt.png';
  private readonly SITE_NAME = 'Multi-Markt Elche';

  // Backward compatibility
  updateTitle(title: string) {
    this.updateTags({ title, description: '' });
  }

  updateMetaTags(config: { description?: string; keywords?: string; url?: string; image?: string }) {
    const currentTitle = this.titleService.getTitle().replace(` | ${this.SITE_NAME}`, '');
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
    const title = config.title.includes(this.SITE_NAME) ? config.title : `${config.title} | ${this.SITE_NAME}`;
    const description = config.description || 'Ahorra en tus facturas con Multi-Markt Elche. Expertos en Fibra, Móvil y Energía para particulares y empresas en Elche.';
    const image = config.image || this.DEFAULT_IMAGE;
    
    this.titleService.setTitle(title);

    // Standard Tags
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
    if (config.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: config.keywords });
    }

    // Open Graph
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:type', content: config.type || 'website' });
    this.metaService.updateTag({ property: 'og:image', content: image });
    this.metaService.updateTag({ property: 'og:site_name', content: this.SITE_NAME });

    if (config.url) {
      this.metaService.updateTag({ property: 'og:url', content: config.url });
    }

    // Twitter
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
    this.metaService.updateTag({ name: 'twitter:image', content: image });

    this.updateCanonicalUrl(config.url);
  }

  setLocalBusinessSchema() {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ConsultingService",
      "name": "Multi-Markt Elche",
      "alternateName": "Asesoría Energética y Telecomunicaciones Multi-Markt",
      "description": "Tu consultoría tecnológica de confianza en Elche. Transformamos tus facturas en ahorro real con asesoramiento humano y experto.",
      "url": "https://multimarkt.ovny.net/",
      "logo": this.DEFAULT_IMAGE,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "C/ Josep Bernad Amorós, 108",
        "addressLocality": "Elche",
        "addressRegion": "Alicante",
        "postalCode": "03205",
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 38.2709,
        "longitude": -0.7101
      },
      "telephone": "+34621660580",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "09:00",
          "closes": "20:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Friday",
          "opens": "09:00",
          "closes": "14:00"
        }
      ],
      "sameAs": [
        "https://instagram.com/multimarkt_elche",
        "https://facebook.com/multimarkt"
      ]
    };
    this.setStructuredData(jsonLd, 'local-business-data');
  }

  setBreadcrumbs(items: { name: string, url: string }[]) {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `https://multimarkt.ovny.net${item.url}`
      }))
    };
    this.setStructuredData(jsonLd, 'breadcrumb-data');
  }

  setFaqSchema(faqs: { question: string, answer: string }[]) {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
    this.setStructuredData(jsonLd, 'faq-data');
  }

  setServiceSchema(service: { name: string, description: string, provider?: string }) {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.name,
      "description": service.description,
      "provider": {
        "@type": "LocalBusiness",
        "name": service.provider || "Multi-Markt Elche",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "C/ Josep Bernad Amorós, 108",
          "addressLocality": "Elche",
          "postalCode": "03205"
        }
      },
      "areaServed": "Elche, Alicante"
    };
    this.setStructuredData(jsonLd, 'service-data');
  }

  setReviewSchema(reviews: { author: string, date: string, text: string, rating: number }[]) {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Multi-Markt Elche",
      "review": reviews.map(r => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": r.author },
        "datePublished": r.date,
        "reviewBody": r.text,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": r.rating,
          "bestRating": "5"
        }
      }))
    };
    this.setStructuredData(jsonLd, 'review-data');
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

  setStructuredData(jsonLd: any, id: string = 'dynamic-seo-data') {
    try {
      // Remove previous JSON-LD if any with the same ID to avoid duplicates
      const existingScript = this.document.querySelector(`script[type="application/ld+json"]#${id}`);
      if (existingScript) {
        existingScript.remove();
      }

      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      script.text = JSON.stringify(jsonLd);
      this.document.head.appendChild(script);
    } catch (e) {
      console.error('Error setting structured data', e);
    }
  }
}
