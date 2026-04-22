import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-4xl mx-auto px-4 py-20 lg:py-28 text-slate-700">
      <h1 class="text-3xl font-bold mb-8">Política de Privacidad</h1>
      
      <div class="prose prose-slate max-w-none">
        <p class="mb-4">
          En Multi Markt nos comprometemos a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos su información personal como "Supermercado de Telecomunicaciones".
        </p>

        <h2 class="text-xl font-bold mt-8 mb-4">1. Responsable del Tratamiento</h2>
        <p class="mb-4">
          <strong>Identidad:</strong> Multi Markt<br>
          <strong>Dirección:</strong> C/ José Bernad Amorós, 108, 03205 Elx, Alicante<br>
          <strong>Email:</strong> info&#64;multimarkt.eu<br>
          <strong>Teléfono:</strong> 621 66 05 80
        </p>

        <h2 class="text-xl font-bold mt-8 mb-4">2. Finalidad del Tratamiento</h2>
        <p class="mb-4">
          Tratamos la información que nos facilita con el fin de prestarle el servicio de comparación y contratación de servicios de telecomunicaciones y energía, así como enviarle comunicaciones sobre nuestros productos si nos da su consentimiento.
        </p>

        <h2 class="text-xl font-bold mt-8 mb-4">3. Legitimación</h2>
        <p class="mb-4">
          La base legal para el tratamiento de sus datos es la ejecución del servicio de comparación solicitado y su consentimiento expreso al ponerse en contacto con nosotros.
        </p>
        
        <h2 class="text-xl font-bold mt-8 mb-4">4. Destinatarios</h2>
        <p class="mb-4">
          Sus datos no se cederán a terceros salvo obligación legal o cuando sea estrictamente necesario para la formalización del contrato con la operadora elegida (Vodafone, Orange, Movistar, etc.).
        </p>

        <h2 class="text-xl font-bold mt-8 mb-4">5. Derechos</h2>
        <p class="mb-4">
          Usted tiene derecho a acceder, rectificar y suprimir los datos, así como otros derechos, como se explica en la información adicional.
        </p>
      </div>
    </div>
  `
})
export class PrivacyPolicyComponent {
  constructor(private seoService: SeoService) {
    this.seoService.updateTags({
      title: 'Política de Privacidad',
      description: 'Consulta nuestra política de privacidad para saber cómo protegemos tus datos en Multi Markt.',
      url: 'https://web-multimarkt.pages.dev/politica-privacidad'
    });
  }
}
