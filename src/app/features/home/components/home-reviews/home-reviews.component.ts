import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
  isLocalGuide?: boolean;
}

@Component({
  selector: 'app-home-reviews',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-slate-50 relative overflow-hidden">
      <!-- Decor -->
      <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div class="max-w-2xl">
            <div class="flex items-center gap-2 mb-4">
              <div class="flex text-yellow-400">
                <span *ngFor="let s of [1,2,3,4,5]">★</span>
              </div>
              <span class="text-slate-900 font-bold">4.9 / 5 en Google</span>
            </div>
            <h2 class="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-tight">
              Lo que dicen los <span class="text-blue-600">ilicitanos</span>
            </h2>
          </div>
          <a href="https://www.google.com/search?q=Multi+Markt+Elche+reseñas" target="_blank" class="inline-flex items-center gap-2 text-slate-500 font-bold hover:text-blue-600 transition-all uppercase tracking-widest text-xs">
            Ver todas las reseñas 
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let review of reviews" class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 group">
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-lg font-bold text-blue-600">
                  {{ review.name.charAt(0) }}
                </div>
                <div>
                  <h4 class="font-bold text-slate-900 leading-none mb-1">{{ review.name }}</h4>
                  <p class="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                    {{ review.isLocalGuide ? 'Local Guide' : 'Verificado' }} • Google
                  </p>
                </div>
              </div>
              <div class="flex text-yellow-400 text-xs">
                <span *ngFor="let s of [1,2,3,4,5]">★</span>
              </div>
            </div>
            
            <p class="text-slate-600 leading-relaxed text-sm italic group-hover:text-slate-900 transition-colors">
              "{{ review.text }}"
            </p>
            
            <div class="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
              <span class="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{{ review.date }}</span>
              <div class="w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity">
                <img src="https://www.gstatic.com/images/branding/product/2x/google_24dp.png" alt="Google">
              </div>
            </div>
          </div>
        </div>

        <!-- Social Proof Footer -->
        <div class="mt-20 flex flex-col items-center text-center">
            <div class="flex -space-x-3 mb-6">
              <img *ngFor="let i of [1,2,3,4,5,6]" [src]="'https://i.pravatar.cc/100?u=' + i" class="w-12 h-12 rounded-full border-4 border-slate-50 shadow-sm">
            </div>
            <p class="text-slate-500 font-medium">
              Únete a los más de <span class="text-slate-900 font-bold">1.000 clientes</span> que ya ahorran en Elche.
            </p>
        </div>

      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class HomeReviewsComponent {
  reviews: Review[] = [
    {
      name: 'Cristian Jimenez',
      isLocalGuide: true,
      rating: 5,
      text: '¡Una experiencia de 10 en Multimarkt Elche! Fui buscando una solución para reducir mis gastos mensuales y la verdad es que el trato es inmejorable.',
      date: 'Hace 5 días'
    },
    {
      name: 'Fher Henarejos Montoya',
      isLocalGuide: true,
      rating: 5,
      text: 'La instalación fue muy rápida y demostraron una gran profesionalidad. Sin duda, una empresa definitiva para cualquier necesidad.',
      date: 'Hace 8 semanas'
    },
    {
      name: 'Rahim Gadi',
      isLocalGuide: false,
      rating: 5,
      text: 'Muy bien atendido y muy hamables. Me resolvieron todas las dudas con la factura de la luz y el móvil.',
      date: 'Hace 6 semanas'
    },
    {
      name: 'Ahmed Mohamed',
      isLocalGuide: true,
      rating: 5,
      text: 'Muy majos ❤️. El ahorro es real y se nota desde el primer mes. Recomendable 100%.',
      date: 'Hace 5 semanas'
    },
    {
      name: 'Carlos Paredes Gomez',
      isLocalGuide: false,
      rating: 5,
      text: 'Trato excelente en la tienda de Elche. Han conseguido bajarme la factura casi a la mitad manteniendo la misma red.',
      date: 'Hace 5 semanas'
    },
    {
      name: 'Ibrahim Benaichata',
      isLocalGuide: false,
      rating: 5,
      text: 'Empresa seria y profesional. Te explican todo sin letra pequeña y te ayudan a elegir la mejor tarifa.',
      date: 'Hace 7 semanas'
    }
  ];
}
