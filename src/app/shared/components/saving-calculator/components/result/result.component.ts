import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saving-calculator-result',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gradient-to-br from-slate-900 to-blue-900 rounded-[2rem] p-8 text-center text-white relative overflow-hidden group h-full">
       <!-- Sparkles effect -->
       <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
       
       <div class="relative z-10">
         <p class="text-blue-300 font-bold uppercase tracking-widest text-xs mb-2">Ahorro Estimado Anual</p>
         <div class="text-6xl md:text-7xl font-black mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200">
           {{ savings }}€
         </div>
         <p class="text-blue-100/80 text-sm mb-8">¡Equivale a casi <span class="text-white font-bold">{{ months }} meses</span> de tu factura actual gratis!</p>
         
         <button (click)="submit.emit()" 
            class="btn-whatsapp w-full">
           <span>💬</span>
           Quiero este ahorro ya
         </button>
       </div>
    </div>
  `
})
export class SavingCalculatorResultComponent {
  @Input() savings: number = 0;
  @Input() months: string = '0';
  @Output() submit = new EventEmitter<void>();
}
