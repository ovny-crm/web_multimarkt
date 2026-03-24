import { Component, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saving-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="py-20 bg-slate-50 relative overflow-hidden">
      <!-- Decorative background -->
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600"></div>
      
      <div class="max-w-4xl mx-auto px-4 relative z-10">
        <div class="text-center mb-12">
          <span class="text-blue-600 font-bold tracking-widest uppercase text-sm">Calculadora de Ahorro</span>
          <h2 class="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-4 tracking-tighter">
            ¿CUÁNTO TE ESTÁS DEJANDO POR EL CAMINO?
          </h2>
          <p class="text-slate-600 text-lg">Mueve la barra para ver cuánto podrías estar ahorrando al año con Multi-Markt.</p>
        </div>

        <div class="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            
            <div class="space-y-8">
              <div>
                <label class="block text-slate-900 font-bold mb-4 flex justify-between">
                  <span>Pago mensual actual:</span>
                  <span class="text-blue-600 text-2xl font-black">{{ currentBill }}€</span>
                </label>
                <input type="range" 
                       [(ngModel)]="currentBill" 
                       min="20" max="250" step="5"
                       class="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600">
                <div class="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                  <span>20€</span>
                  <span>100€</span>
                  <span>250€</span>
                </div>
              </div>

              <div class="p-6 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                <p class="text-sm text-slate-500 mb-1 italic">Basado en promedios de ahorro de nuestros clientes en Elche (+25%)</p>
              </div>
            </div>

            <div class="bg-gradient-to-br from-slate-900 to-blue-900 rounded-[2rem] p-8 text-center text-white relative overflow-hidden group">
               <!-- Sparkles effect -->
               <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
               
               <div class="relative z-10">
                 <p class="text-blue-300 font-bold uppercase tracking-widest text-xs mb-2">Ahorro Estimado Anual</p>
                 <div class="text-6xl md:text-7xl font-black mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200">
                   {{ estimatedSavings }}€
                 </div>
                 <p class="text-blue-100/80 text-sm mb-8">¡Equivale a casi <span class="text-white font-bold">{{ monthEquivalent }} meses</span> de tu factura actual gratis!</p>
                 
                 <button (click)="openWhatsapp()" 
                   class="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-black rounded-xl transition-all hover:scale-105 shadow-xl shadow-emerald-500/20 uppercase tracking-wide flex items-center justify-center gap-3">
                   <span>💬</span>
                   Quiero este ahorro ya
                 </button>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 28px;
      width: 28px;
      border-radius: 50%;
      background: #2563eb;
      cursor: pointer;
      box-shadow: 0 0 15px rgba(37, 99, 235, 0.4);
      border: 4px solid white;
    }
  `]
})
export class SavingCalculatorComponent {
  private platformId = inject(PLATFORM_ID);
  currentBill: number = 60;

  get estimatedSavings(): number {
    // Assumption: 25% savings on average
    return Math.round(this.currentBill * 0.25 * 12);
  }

  get monthEquivalent(): string {
    return (this.estimatedSavings / this.currentBill).toFixed(1);
  }

  openWhatsapp() {
    if (isPlatformBrowser(this.platformId)) {
      const text = `Hola! He usado vuestra calculadora y he visto que puedo ahorrar unos ${this.estimatedSavings}€ al año. Mi factura actual es de ${this.currentBill}€. ¿Podéis ayudarme?`;
      const url = `https://wa.me/34621660580?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    }
  }
}
