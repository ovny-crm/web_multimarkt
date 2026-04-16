import { Component, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Plan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  tag?: string;
  color: string;
}

@Component({
  selector: 'app-pricing-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase">
            Nuestros Top Ventas en Elche
          </h2>
          <p class="text-lg text-slate-600 max-w-2xl mx-auto">
            Seleccionamos las mejores ofertas de entre todas las operadoras para que no tengas que buscar.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          @for (plan of plans; track plan.id) {
            <div [ngClass]="{
              'border-blue-500 scale-[1.03] shadow-blue-100 z-10': plan.tag,
              'border-slate-100 shadow-slate-100': !plan.tag
            }" class="relative bg-white border-2 rounded-[3rem] p-8 transition-all hover:-translate-y-2 shadow-2xl flex flex-col group">
              
              @if (plan.tag) {
                <div class="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-1 rounded-full text-sm font-black uppercase tracking-widest shadow-lg">
                  {{ plan.tag }}
                </div>
              }

              <div class="mb-6">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-xl font-black text-slate-900 uppercase tracking-wide">{{ plan.name }}</h3>
                </div>
                <div class="flex items-baseline gap-1">
                  <span class="text-5xl font-black text-slate-900 tracking-tighter">{{ plan.price }}</span>
                  <span class="text-slate-500 font-bold">€/mes</span>
                </div>
                <p class="text-slate-600 text-sm mt-4 font-medium h-12">{{ plan.description }}</p>
              </div>

              <ul class="space-y-4 mb-8 flex-1">
                @for (feature of plan.features; track feature) {
                  <li class="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                    <span class="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px]">✔</span>
                    {{ feature }}
                  </li>
                }
              </ul>

              <button (click)="selectPlan(plan)"
                [ngClass]="plan.tag ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20' : 'bg-slate-900 hover:bg-slate-800 text-white'"
                class="w-full py-4 rounded-2xl font-black transition-all shadow-xl uppercase tracking-wider group-hover:scale-[1.02]">
                Lo quiero
              </button>
            </div>
          }
        </div>
        
        <div class="mt-16 text-center">
          <p class="text-slate-400 text-sm italic">Precios con IVA incluido y precio final garantizado, sin sorpresas.</p>
        </div>
      </div>
    </section>
  `,
  styleUrl: './pricing-table.component.scss'
})
export class PricingTableComponent {
  private platformId = inject(PLATFORM_ID);
  
  plans: Plan[] = [
    {
      id: '1',
      name: 'Redi (Elche)',
      price: '24,90',
      description: 'La opción más económica de Elche con fibra local.',
      features: ['Fibra 300Mb Simétrica', 'Móvil 25GB Acumulables', 'Llamadas Ilimitadas'],
      color: 'red'
    },
    {
      id: '2',
      name: 'Lowi (Top)',
      price: '29,90',
      description: 'Nuestro pack más vendido con cobertura Vodafone.',
      features: ['Fibra 600Mb Fit', 'Móvil 50GB + Ilimitadas', 'Gigas acumulables'],
      tag: 'La más elegida',
      color: 'indigo'
    },
    {
      id: '3',
      name: 'O2 (Telefónica)',
      price: '30,00',
      description: 'Calidad Movistar sin permanencia ni sorpresas.',
      features: ['Fibra 300Mb Real', 'Móvil 35GB 5G+', 'Red de Telefónica'],
      color: 'blue'
    },
    {
      id: '4',
      name: 'Aproop! (Regional)',
      price: '29,90',
      description: 'Operadora valenciana con atención personalizada local.',
      features: ['Fibra 300Mb', 'Móvil 30GB 5G', 'Atención en Valenciano'],
      color: 'orange'
    },
    {
      id: '5',
      name: 'Avatel (Giga)',
      price: '29,99',
      description: 'Velocidad extrema para hogares ultra conectados.',
      features: ['Fibra 1000Mb (1Gbps)', 'Móvil 100GB Acumulables', 'Fijo Ilimitado'],
      color: 'purple'
    },
    {
      id: '6',
      name: 'Movistar Base',
      price: '34,90',
      description: 'El servicio premium de Telefónica con toda la estabilidad.',
      features: ['Fibra 300Mb Simétrica', 'Móvil 30GB + Ilimitadas', 'Movistar Plus+ Incluido'],
      color: 'cyan'
    }
  ];

  selectPlan(plan: Plan) {
    if (isPlatformBrowser(this.platformId)) {
      const text = `Hola! Me interesa vuestra tarifa "${plan.name}" por ${plan.price}€/mes que he visto en la web. ¿Me podéis dar más info?`;
      const url = `https://wa.me/34621660580?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    }
  }
}
