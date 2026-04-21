import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saving-calculator-slider',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="space-y-8">
      <div>
        <label class="block text-slate-900 font-bold mb-4 flex justify-between">
          <span>Pago mensual actual:</span>
          <span class="text-blue-600 text-2xl font-black">{{ currentBill }}€</span>
        </label>
        <input type="range" 
               [ngModel]="currentBill" 
               (ngModelChange)="onBillChange($event)"
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
  `
})
export class SavingCalculatorSliderComponent {
  @Input() currentBill: number = 60;
  @Output() billChange = new EventEmitter<number>();

  onBillChange(value: any) {
    this.billChange.emit(Number(value));
  }
}
