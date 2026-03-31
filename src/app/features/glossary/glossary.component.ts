import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

interface Term {
  word: string;
  definition: string;
  category: string;
  icon: string;
}

@Component({
  selector: 'app-glossary',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-900 pt-24 pb-20 relative overflow-hidden">
      <!-- Premium Background Effects -->
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse"></div>
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] -ml-64 -mb-64"></div>

      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <header class="text-center mb-16">
          <span class="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-4">
            Knowledge Hub 2026
          </span>
          <h1 class="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]">
            La Biblia del <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Ahorro</span>
          </h1>
          <p class="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            Domina los términos técnicos para que nunca más te engañen en tu factura.
          </p>
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Sidebar Navigation -->
          <aside class="lg:col-span-3 space-y-4">
            <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sticky top-24">
              <h4 class="text-white font-black uppercase tracking-widest text-xs mb-6 opacity-50">Categorías</h4>
              <nav class="space-y-2">
                @for (cat of categories; track cat) {
                  <button 
                    (click)="selectedCategory = cat"
                    [ngClass]="selectedCategory === cat ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'text-slate-400 hover:text-white hover:bg-white/5'"
                    class="w-full text-left px-4 py-3 rounded-xl font-bold transition-all flex items-center justify-between group">
                    <span>{{ cat }}</span>
                    <span class="text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </button>
                }
              </nav>
            </div>
          </aside>

          <!-- Main Content Hub -->
          <div class="lg:col-span-9">
            <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-12 overflow-hidden shadow-2xl">
              
              <!-- Search Bar -->
              <div class="relative mb-12 group">
                <input type="text" [(ngModel)]="searchTerm" 
                  placeholder="Busca un concepto (ej: CG-NAT)..."
                  class="w-full px-8 py-6 bg-slate-800/50 rounded-2xl border-2 border-white/5 focus:border-cyan-500 outline-none transition-all text-xl font-bold text-white placeholder-slate-500">
                <div class="absolute right-6 top-1/2 -translate-y-1/2 text-2xl group-focus-within:scale-125 transition-transform">🔍</div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                @for (term of filteredTerms; track term.word) {
                  <div class="group relative p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-cyan-400/30 transition-all duration-300">
                    <div class="absolute top-6 right-6 text-2xl opacity-40 group-hover:opacity-100 transition-opacity scale-75 group-hover:scale-100">
                      {{ term.icon }}
                    </div>
                    <span class="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-3 block opacity-80">
                      {{ term.category }}
                    </span>
                    <h3 class="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-cyan-400 transition-colors">
                      {{ term.word }}
                    </h3>
                    <p class="text-slate-400 leading-relaxed font-medium">
                      {{ term.definition }}
                    </p>
                    
                    <div class="mt-6 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                      <span class="text-[10px] text-slate-500 uppercase font-black">Multi-Markt Experto</span>
                      <a routerLink="/blog" class="text-xs text-cyan-400 font-bold hover:underline">Saber más →</a>
                    </div>
                  </div>
                } @empty {
                  <div class="col-span-full text-center py-20">
                    <div class="text-6xl mb-6 truncate grayscale">🤔</div>
                    <h3 class="text-2xl font-black text-white mb-2">No encontramos ese término</h3>
                    <p class="text-slate-500">Pero pregúntanos por WhatsApp y te lo explicamos en 1 minuto.</p>
                  </div>
                }
              </div>
            </div>

            <!-- Pro-Tip Card -->
            <div class="mt-8 p-10 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] shadow-2xl relative overflow-hidden group">
               <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-110 transition-transform"></div>
               <div class="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                 <div class="text-5xl">💡</div>
                 <div>
                   <h4 class="text-2xl font-black text-white uppercase tracking-tighter mb-2">¿Sabías que...?</h4>
                   <p class="text-blue-100 font-medium leading-relaxed">
                     El 90% de la gente no sabe qué fibra tiene instalada en casa. <br>
                     <strong>Multi-Markt</strong> es el único que te explica la red real que llega a tu calle.
                   </p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
    ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
  `]
})
export class GlossaryComponent implements OnInit {
  private seoService = inject(SeoService);
  
  ngOnInit() {
    this.seoService.updateTags({
      title: 'Glosario de Telecomunicaciones: Entiende tu Factura',
      description: 'Aprende qué es el CG-NAT, la Fibra Simétrica, el Roaming y más. Guía completa para que no te engañen en tu factura de luz o internet.',
      url: 'https://multimarkt.ovny.net/glosario',
      keywords: 'glosario telecomunicaciones, que es cgnat, fibra simetrica, ahorro facturas, conceptos internet',
      type: 'website'
    });
  }

  searchTerm: string = '';
  selectedCategory: string = 'Todos';

  categories = ['Todos', 'Internet', 'Móvil', 'Red', 'Hardware', 'Legal'];

  terms: Term[] = [
    { word: 'Fibra Óptica', definition: 'Tecnología que transmite datos mediante pulsos de luz sobre hilos de vidrio. Es la conexión más rápida y estable del mercado.', category: 'Internet', icon: '⚡' },
    { word: 'CG-NAT', definition: 'Técnica de los operadores para ahorrar direcciones IP. Puede dar problemas si juegas online o quieres abrir puertos en tu router.', category: 'Red', icon: '🔗' },
    { word: 'Roaming', definition: 'Servicio para usar tu móvil fuera de España. En la Unión Europea no tiene coste extra, pero fuera puede ser carísimo.', category: 'Móvil', icon: '✈️' },
    { word: 'Fibra Simétrica', definition: 'Significa que tienes la misma velocidad para descargar archivos que para subirlos (ej: 600 Mb de bajada y 600 Mb de subida).', category: 'Internet', icon: '⚖️' },
    { word: 'ADSL', definition: 'El abuelo del internet por cable de cobre. Telefónica apaga definitivamente esta red en abril de 2026. Es hora de pasarse a fibra.', category: 'Internet', icon: '👴' },
    { word: 'OMV', definition: 'Operador Móvil Virtual. Son compañías que no tienen antenas propias y alquilan la red a los grandes (Movistar, Vodafone, Orange).', category: 'Móvil', icon: '🏢' },
    { word: 'Portabilidad', definition: 'El proceso legal para cambiar de compañía manteniendo tu número de siempre. Suele tardar entre 2 y 4 días hábiles.', category: 'Legal', icon: '🔄' },
    { word: 'Permanencia', definition: 'El compromiso de quedarte con un operador durante un tiempo (ej: 12 meses) a cambio de que te regalen la instalación.', category: 'Legal', icon: '📝' },
    { word: '5G / 5G+', definition: 'La última evolución de las redes móviles. Permite velocidades de hasta 10Gbps y latencia casi nula para el metaverso o cirugía remota.', category: 'Móvil', icon: '📶' },
    { word: 'Latencia (Ping)', definition: 'Lo que tarda un dato en ir y volver. Si eres gamer, buscas un ping bajo (menos de 20ms). Si el ping es alto, tendrás "lag".', category: 'Red', icon: '🎮' },
    { word: 'Router WiFi 6', definition: 'La versión más moderna del aparato que reparte el internet. Gestiona mejor muchos móviles conectados a la vez sin colapsar.', category: 'Hardware', icon: '📟' },
    { word: 'ONT', definition: 'El pequeño dispositivo que "traduce" la luz que llega por el cable de fibra en internet usable para tu ordenador.', category: 'Hardware', icon: '📠' },
    { word: 'IP Pública', definition: 'Tu matrícula única en internet. Si tienes IP fija, nunca cambia; si es dinámica (lo normal), cambia cada vez que reinicias el router.', category: 'Red', icon: '🆔' },
    { word: 'Sincronización', definition: 'La velocidad máxima a la que se comunican tu router y la central operativa del operador.', category: 'Red', icon: '🤝' }
  ];

  get filteredTerms() {
    return this.terms.filter(t => {
      const matchesSearch = t.word.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          t.definition.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.selectedCategory === 'Todos' || t.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }
}
