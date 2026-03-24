import { Component, OnInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Proof {
  name: string;
  city: string;
  amount: number;
  time: string;
}

@Component({
  selector: 'app-social-proof',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="currentProof" 
         class="fixed bottom-24 left-4 z-50 animate-bounce-in transition-all duration-500 max-w-sm">
      <div class="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-cyan-100 flex items-center gap-4">
        <div class="w-12 h-12 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl">
          💰
        </div>
        <div>
          <p class="text-sm text-gray-900 font-bold">
            {{ currentProof.name }} de {{ currentProof.city }}
          </p>
          <p class="text-xs text-slate-600">
            Ahorró <span class="text-emerald-600 font-bold">{{ currentProof.amount }}€/año</span> {{ currentProof.time }}
          </p>
        </div>
        <button (click)="currentProof = null" class="text-gray-400 hover:text-gray-600">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>
    </div>
  `,
  styles: [`
    @keyframes bounce-in {
      0% { transform: translateY(100%) scale(0.9); opacity: 0; }
      50% { transform: translateY(-10%) scale(1.05); }
      100% { transform: translateY(0) scale(1); opacity: 1; }
    }
    .animate-bounce-in {
      animation: bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }
  `]
})
export class SocialProofComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  currentProof: Proof | null = null;
  private timer: any;

  private allProofs: Proof[] = [
    { name: 'Antonio', city: 'Elche', amount: 120, time: 'hace 10 minutos' },
    { name: 'María', city: 'Alicante', amount: 340, time: 'hace 1 hora' },
    { name: 'Juan', city: 'Santa Pola', amount: 95, time: 'hace 30 min' },
    { name: 'Elena', city: 'Elche', amount: 210, time: 'hace 5 min' },
    { name: 'Roberto', city: 'Crevillente', amount: 180, time: 'hace 2 horas' },
    { name: 'Lucía', city: 'Elche', amount: 420, time: 'ayer' },
    { name: 'Paco', city: 'Guardamar', amount: 155, time: 'hace 15 min' },
  ];

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startCycle();
    }
  }

  ngOnDestroy() {
    if (this.timer) clearTimeout(this.timer);
  }

  private startCycle() {
    const showNext = () => {
      // Pick random proof
      const randomIndex = Math.floor(Math.random() * this.allProofs.length);
      this.currentProof = this.allProofs[randomIndex];

      // Wait 5 seconds, then hide
      setTimeout(() => {
        this.currentProof = null;
        // Wait random time between 10-20 seconds before showing next
        const waitTime = 10000 + Math.random() * 10000;
        this.timer = setTimeout(showNext, waitTime);
      }, 5000);
    };

    // First appearance after 3 seconds
    setTimeout(showNext, 3000);
  }
}
