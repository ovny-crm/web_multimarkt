import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../../core/services/seo.service';

@Component({
    selector: 'app-cookies-policy',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="max-w-4xl mx-auto px-4 py-20 lg:py-28 text-slate-700">
      <h1 class="text-3xl font-bold mb-8">Política de Cookies</h1>
      
      <div class="prose prose-slate max-w-none">
        <p class="mb-4">
          Multi Markt utiliza cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.
        </p>

        <h2 class="text-xl font-bold mt-8 mb-4">¿Qué son las cookies?</h2>
        <p class="mb-4">
          Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo.
        </p>

        <h2 class="text-xl font-bold mt-8 mb-4">Tipos de cookies que utiliza esta web</h2>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Cookies de análisis:</strong> Son aquéllas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.</li>
          <li><strong>Cookies publicitarias:</strong> Son aquéllas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios.</li>
        </ul>

        <h2 class="text-xl font-bold mt-8 mb-4">Cómo desactivar las cookies</h2>
        <p class="mb-4">
          Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.
        </p>
      </div>
    </div>
  `
})
export class CookiesPolicyComponent {
    constructor(private seoService: SeoService) {
        this.seoService.updateTags({
            title: 'Política de Cookies',
            description: 'Información detallada sobre el uso de cookies en la web de Multi Markt.',
            url: 'https://web-multimarkt.pages.dev/cookies'
        });
    }
}
