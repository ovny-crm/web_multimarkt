import { Component, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SavingCalculatorHeaderComponent } from './components/header/header.component';
import { SavingCalculatorSliderComponent } from './components/slider/slider.component';
import { SavingCalculatorResultComponent } from './components/result/result.component';

@Component({
  selector: 'app-saving-calculator',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    SavingCalculatorHeaderComponent,
    SavingCalculatorSliderComponent,
    SavingCalculatorResultComponent
  ],
  templateUrl: './saving-calculator.component.html',
  styleUrl: './saving-calculator.component.scss'
})
export class SavingCalculatorComponent {
  private platformId = inject(PLATFORM_ID);
  currentBill: number = 60;

  updateBill(value: number) {
    this.currentBill = value;
  }

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
