import { Component, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home-trust',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-slate-50 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          
          <!-- Image Gallery / Grid -->
          <div class="relative">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-4">
                <div class="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <img src="assets/images/fachada-main.png" alt="Tienda Multi-Markt Elche" class="w-full h-64 object-cover">
                </div>
                <div class="rounded-3xl overflow-hidden shadow-xl transform translate-x-4 hover:scale-105 transition-all duration-500">
                  <img src="assets/images/interior-hero.png" alt="Interior Multi-Markt Elche" class="w-full h-48 object-cover">
                </div>
              </div>
              <div class="space-y-4 pt-8">
                <div class="rounded-3xl overflow-hidden shadow-xl transform -translate-x-4 hover:scale-105 transition-all duration-500">
                  <img src="assets/images/interior-detail.png" alt="Detalle Atención Multi-Markt" class="w-full h-48 object-cover">
                </div>
                <div class="rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500">
                  <div class="bg-blue-600 h-64 flex flex-col items-center justify-center p-8 text-white text-center">
                    <span class="text-4xl mb-4">📍</span>
                    <h4 class="font-black uppercase tracking-tighter text-xl">Visítanos en Elche</h4>
                    <p class="text-blue-100 text-sm mt-2">C/ José Bernad Amorós, 108</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Decorative Elements -->
            <div class="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 rounded-full blur-3xl"></div>
          </div>

          <!-- Trust Content -->
          <div>
            <span class="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Transparencia y Confianza
            </span>
            <h2 class="text-4xl font-black text-slate-900 sm:text-5xl tracking-tighter uppercase leading-tight mb-8">
              No somos un Call Center, <br>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">somos tus vecinos en Elche</span>
            </h2>
            
            <p class="text-xl text-slate-600 leading-relaxed mb-10">
              En Multi-Markt entendemos que tratar con las grandes operadoras puede ser frustrante. Por eso creamos un espacio físico donde puedes venir, sentarte y hablar con expertos reales que viven en tu misma ciudad.
            </p>

            <div class="space-y-8">
              <div class="flex gap-6">
                <div class="flex-shrink-0 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-2xl">🤝</div>
                <div>
                  <h4 class="text-lg font-bold text-slate-800 uppercase tracking-tight">Atención 100% Humana</h4>
                  <p class="text-slate-600">Olvídate de las máquinas. Aquí tienes nombre y apellido para tu asesor personal.</p>
                </div>
              </div>
              
              <div class="flex gap-6">
                <div class="flex-shrink-0 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-2xl">📍</div>
                <div>
                  <h4 class="text-lg font-bold text-slate-800 uppercase tracking-tight">Presencia Física en Elche</h4>
                  <p class="text-slate-600">Si tienes un problema, no te pasamos de extensión en extensión. Vienes a la tienda y lo resolvemos.</p>
                </div>
              </div>

              <div class="flex gap-6">
                <div class="flex-shrink-0 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-2xl">💎</div>
                <div>
                  <h4 class="text-lg font-bold text-slate-800 uppercase tracking-tight">Asesoramiento Ético</h4>
                  <p class="text-slate-600">No tenemos compromiso con ninguna marca. Solo con tu ahorro y satisfacción.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class HomeTrustComponent {
  private platformId = inject(PLATFORM_ID);

  openWhatsapp(text: string) {
    if (isPlatformBrowser(this.platformId)) {
      const url = `https://wa.me/34621660580?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    }
  }
}
