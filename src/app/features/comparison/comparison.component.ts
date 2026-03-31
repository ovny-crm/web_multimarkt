import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-comparison',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-red-100 text-red-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
           ¿Harto de DIGI? Tenemos la solución
        </div>
        <h1 class="text-5xl font-black text-slate-900 sm:text-7xl tracking-tighter uppercase leading-tight mb-8">
          ¿Problemas con <span class="text-blue-600 drop-shadow-sm">Digi</span>? 
          <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Hay una alternativa mejor</span> 
        </h1>
        <p class="mt-6 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Si buscas estabilidad, atención personalizada y los mejores precios sin sorpresas, Multi-Markt es tu aliado en Elche. Comparamos por ti y te ofrecemos la red que de verdad funciona en tu calle.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mb-20">
        <div class="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 relative overflow-hidden">
          <div class="absolute -top-10 -right-10 w-32 h-32 bg-red-500/5 rounded-full blur-2xl"></div>
          <h2 class="text-2xl font-black mb-8 text-slate-800 uppercase tracking-tight">Lo que NO te cuentan de Digi</h2>
          <ul class="space-y-6">
            <li class="flex items-start gap-4">
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">✕</span>
              <p class="text-slate-600 leading-relaxed">Atención al cliente telefónica saturada y basada en procesos automáticos.</p>
            </li>
            <li class="flex items-start gap-4">
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">✕</span>
              <p class="text-slate-600 leading-relaxed">Saturación de red en zonas de Elche con mucha demanda (latencia inestable).</p>
            </li>
            <li class="flex items-start gap-4">
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">✕</span>
              <p class="text-slate-600 leading-relaxed">Técnicos externos que a veces tardan días en solucionar una avería.</p>
            </li>
          </ul>
        </div>

        <div class="bg-blue-600 p-10 rounded-[2.5rem] text-white relative shadow-2xl shadow-blue-500/20 overflow-hidden">
          <div class="absolute -bottom-10 -right-10 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl"></div>
          <h2 class="text-2xl font-black mb-8 uppercase tracking-tight">La experiencia Multi-Markt</h2>
          <ul class="space-y-6">
            <li class="flex items-start gap-4">
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center font-bold">✓</span>
              <p class="text-blue-50 leading-relaxed font-medium">Asesor personal dedicado en Elche. Olvídate de hablar con máquinas.</p>
            </li>
            <li class="flex items-start gap-4">
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center font-bold">✓</span>
              <p class="text-blue-50 leading-relaxed font-medium">Redes premium (Movistar, Vodafone, Orange) con estabilidad garantizada.</p>
            </li>
            <li class="flex items-start gap-4">
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center font-bold">✓</span>
              <p class="text-blue-50 leading-relaxed font-medium">Gestión de averías prioritaria y directa. Estamos a tu lado.</p>
            </li>
          </ul>
        </div>
      </div>

      <!-- Comparison CTA Block -->
      <div class="bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden group">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 opacity-50"></div>
        <div class="relative z-10">
          <h2 class="text-4xl font-black mb-6 uppercase tracking-tighter">¿Quieres ver cuánto puedes ahorrar hoy?</h2>
          <p class="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            No te conformes con lo de siempre. Nuestros expertos analizan tu factura de Digi y te dicen qué red te dará mejor rendimiento en tu calle por menos precio.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-6">
            <button (click)="openWhatsapp('Hola! Estoy en Digi y me gustaría ver otras opciones mejores en mi zona.')"
               class="px-10 py-5 bg-[#25D366] text-white font-black rounded-full hover:bg-green-600 transition-all hover:scale-105 shadow-xl shadow-green-500/20 uppercase tracking-widest">
              Consultar por WhatsApp
            </button>
            <a routerLink="/" class="px-10 py-5 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 border border-white/20 transition-all uppercase tracking-widest">
              Volver al Inicio
            </a>
          </div>
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
  private platformId = inject(PLATFORM_ID);

  openWhatsapp(text: string) {
    if (isPlatformBrowser(this.platformId)) {
      const url = `https://wa.me/34621660580?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    }
  }

  ngOnInit() {
    this.seoService.updateTags({
      title: 'Alternativa a Digi: ¿Por qué cambiar a Multi-Markt?',
      description: '¿Cansado de los fallos de Digi? Descubre por qué miles de usuarios están cambiando a Multi-Markt para su fibra y móvil en Elche.',
      keywords: 'alternativa digi, fallos digi, problemas digi, mejor fibra 2026, multimarkt vs digi',
      url: 'https://multimarkt.ovny.net/comparativa-digi',
      type: 'website'
    });
  }
}
