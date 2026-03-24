import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-comparison',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-extrabold text-gray-900 sm:text-6xl tracking-tight">
          ¿Problemas con <span class="text-blue-600">Digi</span>? 
          <br>Descubre la mejor alternativa 
        </h1>
        <p class="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Si buscas estabilidad, atención personalizada y los mejores precios sin sorpresas, Multi-Markt es tu aliado. Comparamos por ti y te ofrecemos la red que de verdad funciona en tu zona.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mb-20">
        <div class="bg-gray-50 p-8 rounded-3xl border border-gray-100">
          <h2 class="text-2xl font-bold mb-6 text-gray-800">Lo que te han contado de Digi</h2>
          <ul class="space-y-4">
            <li class="flex items-start">
              <span class="text-red-500 mr-2">✕</span>
              <p class="text-gray-600">Atención al cliente que a veces tarda horas en responder.</p>
            </li>
            <li class="flex items-start">
              <span class="text-red-500 mr-2">✕</span>
              <p class="text-gray-600">Saturación de red en zonas de alta demanda (latencia alta).</p>
            </li>
            <li class="flex items-start">
              <span class="text-red-500 mr-2">✕</span>
              <p class="text-gray-600">Instalaciones que pueden demorarse semanas.</p>
            </li>
          </ul>
        </div>

        <div class="bg-blue-50 p-8 rounded-3xl border border-blue-100">
          <h2 class="text-2xl font-bold mb-6 text-blue-900">La experiencia Multi-Markt</h2>
          <ul class="space-y-4">
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <p class="text-gray-700 font-medium">Asesor personal dedicado. Olvídate de los robots.</p>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <p class="text-gray-700 font-medium">Redes premium (Movistar, Orange, Vodafone) según cobertura real.</p>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <p class="text-gray-700 font-medium">Precio garantizado de por vida. Sin subidas ocultas.</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-blue-600 rounded-3xl p-12 text-center text-white">
        <h2 class="text-3xl font-bold mb-6">¿Quieres ver cuánto puedes ahorrar hoy?</h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          No te conformes con menos. Nuestros expertos analizan tu última factura de Digi y te dicen exactamente qué red te dará mejor rendimiento en tu calle.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a routerLink="/" class="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-50 transition-colors">
            Ir al Comparador Gratis
          </a>
          <a href="tel:#" class="px-8 py-4 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors">
            Llámanos ahora
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class ComparisonComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit() {
    this.seoService.updateTags({
      title: 'Alternativa a Digi: ¿Por qué cambiar a Multi-Markt?',
      description: '¿Cansado de los fallos de Digi? Descubre por qué miles de usuarios están cambiando a Multi-Markt para su fibra y móvil.',
      keywords: 'alternativa digi, fallos digi, problemas digi, mejor fibra 2026, multimarkt vs digi',
      type: 'website'
    });

    this.seoService.setStructuredData({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Servicio de Fibra y Móvil Multi-Markt",
      "description": "Comparador de fibra y móvil con atención personalizada y red premium.",
      "brand": {
        "@type": "Brand",
        "name": "Multi-Markt"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Usuario Satisfecho"
        }
      }
    });
  }
}
