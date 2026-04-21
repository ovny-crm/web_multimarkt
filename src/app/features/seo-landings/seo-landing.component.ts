import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { LANDING_PAGES, LandingPageData } from './landing-config';

@Component({
  selector: 'app-seo-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    @if (data) {
      <section class="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            {{ data.badge }}
          </div>
          <h1 class="text-5xl font-black text-slate-900 sm:text-7xl tracking-tighter uppercase leading-tight mb-8">
            {{ data.title }}
            <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{{ data.subtitle }}</span> 
          </h1>
          <p class="mt-6 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {{ data.description }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-20">
          <div class="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 relative overflow-hidden">
            <div class="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
            <h2 class="text-2xl font-black mb-8 text-slate-800 uppercase tracking-tight">{{ data.benefitsTitle }}</h2>
            <ul class="space-y-6">
              @for (benefit of data.benefits; track benefit.title) {
                <li class="flex items-start gap-4">
                  <span class="flex-shrink-0 w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl">{{ benefit.icon }}</span>
                  <div>
                    <h3 class="font-bold text-slate-800">{{ benefit.title }}</h3>
                    <p class="text-slate-600 leading-relaxed">{{ benefit.text }}</p>
                  </div>
                </li>
              }
            </ul>
          </div>

          <div class="bg-blue-600 p-10 rounded-[2.5rem] text-white relative shadow-2xl shadow-blue-500/20 overflow-hidden">
            <div class="absolute -bottom-10 -right-10 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl"></div>
            <h2 class="text-2xl font-black mb-8 uppercase tracking-tight">{{ data.comparisonTitle }}</h2>
            <ul class="space-y-6">
              @for (point of data.comparisonPoints; track point.text) {
                <li class="flex items-start gap-4">
                  <span class="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center font-bold">{{ point.icon }}</span>
                  <p class="text-blue-50 leading-relaxed font-medium">{{ point.text }}</p>
                </li>
              }
            </ul>
            <div class="mt-10 pt-10 border-t border-white/10">
              <p class="text-blue-100 italic">"Nuestra misión es que cada vecino de Elche tenga la mejor tarifa posible sin complicaciones."</p>
            </div>
          </div>
        </div>

        <!-- CTA Block -->
        <div class="bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 opacity-50"></div>
          <div class="relative z-10">
            <h2 class="text-4xl font-black mb-6 uppercase tracking-tighter">{{ data.ctaTitle }}</h2>
            <p class="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              No esperes a la próxima factura para empezar a ahorrar. Consulta hoy mismo con nuestros expertos locales.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-6">
              <button (click)="openWhatsapp(data.whatsappMessage)"
                 class="px-10 py-5 bg-[#25D366] text-white font-black rounded-full hover:bg-green-600 transition-all hover:scale-105 shadow-xl shadow-green-500/20 uppercase tracking-widest flex items-center justify-center gap-3">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {{ data.ctaText }}
              </button>
              <a routerLink="/" class="px-10 py-5 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 border border-white/20 transition-all uppercase tracking-widest">
                Volver al Inicio
              </a>
            </div>
          </div>
        </div>
      </section>
    }
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class SeoLandingComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private seoService = inject(SeoService);
  private platformId = inject(PLATFORM_ID);
  
  data: LandingPageData | undefined;

  ngOnInit() {
    this.route.url.subscribe(urlSegments => {
      const slug = urlSegments[0].path;
      this.data = LANDING_PAGES[slug];
      
      if (this.data) {
        this.seoService.updateTags({
          title: this.data.seo.title,
          description: this.data.seo.description,
          keywords: this.data.seo.keywords,
          url: `https://multimarkt.ovny.net/${this.data.slug}`,
          type: 'website'
        });

        this.seoService.setBreadcrumbs([
          { name: 'Inicio', url: '/' },
          { name: this.data.title, url: `/${this.data.slug}` }
        ]);
        
        // Specific landing schema
        this.seoService.setStructuredData({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": this.data.seo.title,
          "description": this.data.seo.description,
          "url": `https://multimarkt.ovny.net/${this.data.slug}`
        }, 'landing-schema');
      }
    });
  }

  openWhatsapp(text: string) {
    if (isPlatformBrowser(this.platformId)) {
      const url = `https://wa.me/34621660580?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    }
  }
}
