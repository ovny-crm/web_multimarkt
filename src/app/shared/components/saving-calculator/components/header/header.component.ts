import { Component } from '@angular/core';

@Component({
  selector: 'app-saving-calculator-header',
  standalone: true,
  template: `
    <div class="text-center mb-12">
      <span class="text-blue-600 font-bold tracking-widest uppercase text-sm">Calculadora de Ahorro</span>
      <h2 class="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-4 tracking-tighter">
        ¿CUÁNTO TE ESTÁS DEJANDO POR EL CAMINO?
      </h2>
      <p class="text-slate-600 text-lg">Mueve la barra para ver cuánto podrías estar ahorrando al año con Multi-Markt.</p>
    </div>
  `
})
export class SavingCalculatorHeaderComponent {}
