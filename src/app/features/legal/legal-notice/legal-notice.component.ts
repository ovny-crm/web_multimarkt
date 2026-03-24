import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../../core/services/seo.service';

@Component({
    selector: 'app-legal-notice',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="max-w-4xl mx-auto px-4 py-20 lg:py-28 text-slate-700">
      <h1 class="text-3xl font-bold mb-8">Aviso Legal</h1>
      
      <div class="prose prose-slate max-w-none">
        <h2 class="text-xl font-bold mt-8 mb-4">1. Datos Identificativos</h2>
        <p class="mb-4">
          En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:
        </p>
        <p class="mb-4">
          La empresa titular de dominio web es <strong>Multi Markt</strong>, con domicilio a estos efectos en C/ Josep Bernad Amorós, 108, 03205 Elx, Alicante. Correo electrónico de contacto: info&#64;multimarkt.eu.
        </p>

        <h2 class="text-xl font-bold mt-8 mb-4">2. Usuarios</h2>
        <p class="mb-4">
          El acceso y/o uso de este portal de Multi Markt atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.
        </p>

        <h2 class="text-xl font-bold mt-8 mb-4">3. Uso del Portal</h2>
        <p class="mb-4">
          Multi Markt proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a Multi Markt o a sus licenciantes a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal.
        </p>
        
        <h2 class="text-xl font-bold mt-8 mb-4">4. Propiedad Intelectual e Industrial</h2>
        <p class="mb-4">
          Multi Markt por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma.
        </p>
      </div>
    </div>
  `
})
export class LegalNoticeComponent {
    constructor(private seoService: SeoService) {
        this.seoService.updateTags({
            title: 'Aviso Legal',
            description: 'Aviso legal y datos identificativos de Multi Markt, tu supermercado de telecomunicaciones.',
            url: 'https://web-multimarkt.pages.dev/aviso-legal'
        });
    }
}
