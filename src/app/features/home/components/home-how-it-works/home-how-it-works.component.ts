import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../../../core/services/whatsapp.service';

@Component({
  selector: 'app-home-how-it-works',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-20">
          <h2 class="text-4xl font-black text-slate-900 sm:text-5xl tracking-tighter uppercase leading-tight mb-4">
            Cómo ahorramos <span class="text-blue-600">por ti</span>
          </h2>
          <p class="text-xl text-slate-600 max-w-2xl mx-auto">
            Un proceso humano y directo para que dejes de regalar dinero a las operadoras.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-12 relative">
          <!-- Connector Line (Desktop) -->
          <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

          <!-- Step 1 -->
          <div class="relative z-10 flex flex-col items-center text-center">
            <div class="w-20 h-20 bg-white text-blue-900 rounded-2xl shadow-2xl shadow-blue-700/10 flex items-center justify-center text-4xl font-black mb-8 border border-blue-200">1</div>
            <h3 class="text-xl font-bold text-slate-800 uppercase tracking-tight mb-4">Envía tu factura</h3>
            <p class="text-slate-600 leading-relaxed">
              Pásanos tu factura actual por WhatsApp o ven a nuestra tienda en Elche. No necesitamos datos bancarios.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="relative z-10 flex flex-col items-center text-center">
            <div class="w-20 h-20 bg-white text-blue-900 rounded-2xl shadow-2xl shadow-blue-700/10 flex items-center justify-center text-4xl font-black mb-8 border border-blue-200">2</div>
            <h3 class="text-xl font-bold text-slate-800 uppercase tracking-tight mb-4">Analizamos y Comparamos</h3>
            <p class="text-slate-600 leading-relaxed">
              Buscamos entre todos los operadores la tarifa que te ofrece lo mismo que tienes (o más) por el precio más bajo.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="relative z-10 flex flex-col items-center text-center">
            <div class="w-20 h-20 bg-white text-blue-900 rounded-2xl shadow-2xl shadow-blue-700/10 flex items-center justify-center text-4xl font-black mb-8 border border-blue-200">3</div>
            <h3 class="text-xl font-bold text-slate-800 uppercase tracking-tight mb-4">Empieza a Ahorrar</h3>
            <p class="text-slate-600 leading-relaxed">
              Si te gusta la oferta, nosotros tramitamos el cambio. Tú no te preocupas de nada, solo de pagar menos cada mes.
            </p>
          </div>

        </div>

        <!-- Extra Trust Banner -->
        <div class="mt-20 p-8 bg-blue-50 rounded-4xl border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-8">
           <div class="flex items-center gap-6">
              <span class="text-4xl shadow-xl bg-white w-16 h-16 rounded-2xl flex items-center justify-center">💡</span>
              <div>
                <h4 class="text-lg font-bold text-slate-800 uppercase tracking-tight">¿Sabías que...?</h4>
                <p class="text-slate-600">Nuestros clientes en Elche ahorran una media de **240€ al año** tras auditar su factura mánager.</p>
              </div>
           </div>
           <button 
             (click)="openWhatsapp()"
             class="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 uppercase tracking-wider text-sm flex items-center gap-2"
           >
             ¿Hacemos la prueba?
             <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
           </button>
        </div>

      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class HomeHowItWorksComponent {
  private whatsappService = inject(WhatsappService);

  openWhatsapp() {
    this.whatsappService.openWhatsapp('Hola! He visto cómo trabajáis y me gustaría que analizarais mi factura para empezar a ahorrar.');
  }
}
