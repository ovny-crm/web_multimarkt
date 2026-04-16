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
  templateUrl: './pricing-table.component.html',
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
