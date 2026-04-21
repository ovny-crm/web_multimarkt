import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Review {
  name: string;
  rating: number;
  text: string;
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
        
        <div class="flex flex-col items-center text-center gap-6 mb-16">
          <div class="max-w-3xl">
            <div class="flex items-center justify-center gap-2 mb-4">
              <div class="flex text-yellow-400">
                <span *ngFor="let s of [1,2,3,4,5]">★</span>
              </div>
              <span class="text-slate-900 font-bold">4.9 / 5 en Google</span>
            </div>
            <h2 class="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-tight sm:text-5xl">
              Lo que dicen los <span class="text-blue-600">ilicitanos</span>
            </h2>
          </div>
          <a href="https://www.google.com/search?q=Multi+Markt+Elche+reseñas" target="_blank" class="inline-flex items-center gap-2 text-slate-500 font-bold hover:text-blue-600 transition-all uppercase tracking-widest text-xs">
            Ver todas las reseñas 
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let review of reviews" class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 group flex flex-col h-full">
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
            
            <p class="text-slate-600 leading-relaxed text-sm italic group-hover:text-slate-900 transition-colors flex-grow">
              "{{ review.text }}"
            </p>
            
            <div class="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
              <span class="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Reseña Verificada</span>
              <div class="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 24 24" class="w-full h-full"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Proof Footer -->
        <div class="mt-20 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left bg-white p-6 rounded-3xl border border-slate-100 shadow-sm max-w-2xl mx-auto">
            <div class="flex -space-x-4">
              <img *ngFor="let i of [1,2,3,4]" [src]="'https://i.pravatar.cc/100?u=' + i" class="w-12 h-12 rounded-full border-4 border-white shadow-md">
            </div>
            <p class="text-sm font-medium text-slate-500 max-w-[280px]">
              <span class="text-slate-900 font-bold block text-base mb-1">Más de 1.000 ilicitanos</span> 
              ya han confiado en nosotros este año para auditar su factura.
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
      text: '¡Una experiencia de 10 en Multimarkt Elche! Fui buscando una solución para reducir mis gastos mensuales y la verdad es que el trato es inmejorable.'
    },
    {
      name: 'Fher Henarejos Montoya',
      isLocalGuide: true,
      rating: 5,
      text: 'La instalación fue muy rápida y demostraron una gran profesionalidad. Sin duda, una empresa definitiva para cualquier necesidad.'
    },
    {
      name: 'Rahim Gadi',
      isLocalGuide: false,
      rating: 5,
      text: 'Muy bien atendido y muy hamables. Me resolvieron todas las dudas con la factura de la luz y el móvil.'
    },
    {
      name: 'Ahmed Mohamed',
      isLocalGuide: true,
      rating: 5,
      text: 'Muy majos ❤️. El ahorro es real y se nota desde el primer mes. Recomendable 100%.'
    },
    {
      name: 'Carlos Paredes Gomez',
      isLocalGuide: false,
      rating: 5,
      text: 'Trato excelente en la tienda de Elche. Han conseguido bajarme la factura casi a la mitad manteniendo la misma red.'
    },
    {
      name: 'Ibrahim Benaichata',
      isLocalGuide: false,
      rating: 5,
      text: 'Empresa seria y profesional. Te explican todo sin letra pequeña y te ayudan a elegir la mejor tarifa.'
    }
  ];
}
