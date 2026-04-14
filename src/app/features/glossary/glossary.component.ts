import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { SafeHtmlPipe } from '../../shared/pipes/safe-html.pipe';

interface Term {
  word: string;
  slug: string;
  definition: string;
  category: string;
  icon: string;
}

@Component({
  selector: 'app-glossary',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, SafeHtmlPipe],
  template: `
    <div class="min-h-screen bg-slate-900 pt-32 pb-20 relative overflow-hidden">
      <!-- Premium Background Effects -->
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] -mr-64 -mt-64"></div>
      <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] -ml-64 -mb-64"></div>

      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <header class="text-center mb-20 pt-16 animate-in fade-in slide-in-from-top-8 duration-1000">
          <span class="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-6">
            Knowledge Hub 2026
          </span>
          <h1 class="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9] drop-shadow-2xl">
            La Biblia del <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">Ahorro</span>
          </h1>
          <p class="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed opacity-80">
            Domina los términos para que nunca más te engañen en tu factura. <br class="hidden md:block"> 
            Actualizado por expertos de Multi-Markt en <span class="text-white font-bold">{{ currentYear }}</span>.
          </p>
        </header>

        <!-- Alphabet Bar -->
        <div class="mb-12 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-4 shadow-2xl flex flex-wrap justify-center gap-2 overflow-x-auto scrollbar-hide">
          <button (click)="selectedLetter = ''" 
            [ngClass]="selectedLetter === '' ? 'bg-cyan-500 text-white scale-110 shadow-lg shadow-cyan-500/30' : 'text-slate-400 hover:text-white hover:bg-white/5'"
            class="w-11 h-11 flex items-center justify-center rounded-2xl font-black text-sm uppercase transition-all duration-300">
            ALL
          </button>
          @for (letter of alphabet; track letter) {
            <button 
              (click)="selectedLetter = letter"
              [disabled]="!hasTermsForLetter(letter)"
              [ngClass]="[
                selectedLetter === letter ? 'bg-cyan-500 text-white scale-110 shadow-lg shadow-cyan-500/30 font-black' : 'text-slate-500 hover:text-white hover:bg-white/5',
                !hasTermsForLetter(letter) ? 'opacity-10 pointer-events-none' : ''
              ]"
              class="w-11 h-11 flex items-center justify-center rounded-2xl font-bold text-sm uppercase transition-all duration-300">
              {{ letter }}
            </button>
          }
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <!-- Sidebar -->
          <aside class="lg:col-span-3 space-y-6">
            <div class="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 sticky top-24 shadow-2xl">
              <h2 class="text-white font-black uppercase tracking-widest text-[10px] mb-8 opacity-40">Categorías</h2>
              <nav class="space-y-3">
                @for (cat of categories; track cat) {
                  <button 
                    (click)="selectedCategory = cat"
                    [ngClass]="selectedCategory === cat ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/30 ring-4 ring-blue-600/20 scale-105' : 'text-slate-400 hover:text-white hover:bg-white/5'"
                    class="w-full text-left px-5 py-4 rounded-2xl font-black text-sm uppercase tracking-wide transition-all flex items-center justify-between group">
                    <span>{{ cat }}</span>
                    <span class="text-xs bg-white/10 px-2 py-0.5 rounded-lg opacity-60 group-hover:opacity-100 transition-opacity">
                      {{ getTermsCount(cat) }}
                    </span>
                  </button>
                }
              </nav>
            </div>
          </aside>

          <!-- Main Content -->
          <div class="lg:col-span-9">
            <div class="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3.5rem] p-8 md:p-14 overflow-hidden shadow-2xl relative">
              <div class="relative mb-16 group">
                <input type="text" [(ngModel)]="searchTerm" 
                  placeholder="Escribe para buscar... (ej: CG-NAT, 5G, Fibra)"
                  class="w-full px-10 py-7 bg-slate-900/80 rounded-[2rem] border border-white/10 focus:border-cyan-500/50 outline-none transition-all text-xl font-bold text-white placeholder-slate-600 shadow-inner">
                <div class="absolute right-10 top-1/2 -translate-y-1/2 text-3xl group-focus-within:scale-125 transition-transform">🔍</div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                @for (term of filteredTerms; track term.word) {
                  <article class="group relative p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-2" [id]="term.slug">
                    <span class="px-4 py-1.5 rounded-full bg-cyan-400/10 text-cyan-400 text-[10px] font-black uppercase tracking-widest border border-cyan-400/20 mb-6 inline-block">
                      {{ term.category }}
                    </span>
                    <div class="flex items-center gap-4 mb-4">
                      <div class="text-3xl filter drop-shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500">
                        {{ term.icon }}
                      </div>
                      <h3 class="text-3xl font-black text-white tracking-tight group-hover:text-cyan-400 transition-colors"
                          [innerHTML]="highlightText(term.word, searchTerm) | safeHtml">
                      </h3>
                    </div>
                    <p class="text-slate-400 leading-relaxed font-medium text-lg mt-4"
                       [innerHTML]="highlightText(term.definition, searchTerm) | safeHtml">
                    </p>
                    <div class="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                      <a (click)="openWhatsapp('Hola, quiero saber más sobre ' + term.word)" class="text-xs text-white/40 hover:text-cyan-400 font-black uppercase tracking-widest cursor-pointer">Saber más →</a>
                      <button (click)="copyLink(term.slug)" class="text-xs text-white/20 hover:text-white transition-opacity">🔗 Copiar enlace</button>
                    </div>
                  </article>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
    ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
  `]
})
export class GlossaryComponent implements OnInit {
  private seoService = inject(SeoService);
  
  currentYear = new Date().getFullYear();
  searchTerm: string = '';
  selectedCategory: string = 'Todos';
  selectedLetter: string = '';

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  categories = ['Todos', 'Internet', 'Móvil', 'Red', 'Hardware', 'Legal'];

  terms: Term[] = [
    { word: 'Fibra Óptica', slug: 'fibra-optica', definition: 'Tecnología que transmite datos mediante pulsos de luz sobre hilos de vidrio. Es la conexión más rápida y estable del mercado.', category: 'Internet', icon: '⚡' },
    { word: 'CG-NAT', slug: 'cg-nat', definition: 'Técnica de los operadores para ahorrar direcciones IP. Puede dar problemas si juegas online o quieres abrir puertos en tu router.', category: 'Red', icon: '🔗' },
    { word: 'Roaming', slug: 'roaming', definition: 'Servicio para usar tu móvil fuera de España. En la Unión Europea no tiene coste extra, pero fuera puede ser carísimo.', category: 'Móvil', icon: '✈️' },
    { word: 'Fibra Simétrica', slug: 'fibra-simetrica', definition: 'Significa que tienes la misma velocidad para descargar archivos que para subirlos (ej: 600 Mb de bajada y 600 Mb de subida).', category: 'Internet', icon: '⚖️' },
    { word: 'ADSL', slug: 'adsl', definition: 'El abuelo del internet por cable de cobre. Telefónica apaga definitivamente esta red en abril de 2026. Es hora de pasarse a fibra.', category: 'Internet', icon: '👴' },
    { word: 'OMV', slug: 'omv', definition: 'Operador Móvil Virtual. Son compañías que no tienen antenas propias y alquilan la red a los grandes (Movistar, Vodafone, Orange).', category: 'Móvil', icon: '🏢' },
    { word: 'Portabilidad', slug: 'portabilidad', definition: 'El proceso legal para cambiar de compañía manteniendo tu número de siempre. Suele tardar entre 2 y 4 días hábiles.', category: 'Legal', icon: '🔄' },
    { word: 'Permanencia', slug: 'permanencia', definition: 'El compromiso de quedarte con un operador durante un tiempo (ej: 12 meses) a cambio de que te regalen la instalación.', category: 'Legal', icon: '📝' },
    { word: '5G / 5G+', slug: '5g', definition: 'La última evolución de las redes móviles. Permite velocidades de hasta 10Gbps y latencia casi nula para el metaverso o cirugía remota.', category: 'Móvil', icon: '📶' },
    { word: 'Latencia (Ping)', slug: 'latencia', definition: 'Lo que tarda un dato en ir y volver. Si eres gamer, buscas un ping bajo (menos de 20ms). Si el ping es alto, tendrás "lag".', category: 'Red', icon: '🎮' },
    { word: 'Router WiFi 6', slug: 'router-wifi-6', definition: 'La versión más moderna del aparato que reparte el internet. Gestiona mejor muchos móviles conectados a la vez sin colapsar.', category: 'Hardware', icon: '📟' },
    { word: 'ONT', slug: 'ont', definition: 'El pequeño dispositivo que "traduce" la luz que llega por el cable de fibra en internet usable para tu ordenador.', category: 'Hardware', icon: '📠' },
    { word: 'IP Pública', slug: 'ip-publica', definition: 'Tu matrícula única en internet. Si tienes IP fija, nunca cambia; si es dinámica (lo normal), cambia cada vez que reinicias el router.', category: 'Red', icon: '🆔' },
    { word: 'Sincronización', slug: 'sincronizacion', definition: 'La velocidad máxima a la que se comunican tu router y la central operativa del operador.', category: 'Red', icon: '🤝' }
  ];

  ngOnInit() {
    this.seoService.updateTags({
      title: 'Diccionario de Ahorro: Glosario de Telecomunicaciones',
      description: 'Entiende tu factura de Fibra, Móvil y Luz. Guía experta sobre CG-NAT, ONT, Roaming y más para que ahorres en Elche.',
      url: 'https://multimarkt.ovny.net/glosario',
      keywords: 'glosario telecomunicaciones, que es cgnat, fibra simetrica, ahorro facturas, conceptos internet, elche ahorro',
      type: 'website'
    });

    this.seoService.setBreadcrumbs([
      { name: 'Inicio', url: '/' },
      { name: 'Glosario', url: '/glosario' }
    ]);

    this.seoService.setStructuredData({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Glosario de Telecomunicaciones Multi Markt",
      "description": "Conceptos clave sobre fibra, móvil y energía",
      "itemListElement": this.terms.map((term, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "DefinedTerm",
          "name": term.word,
          "description": term.definition,
          "url": `https://multimarkt.ovny.net/glosario#${term.slug}`
        }
      }))
    }, 'glossary-list-schema');
  }

  getTermsCount(category: string): number {
    if (category === 'Todos') return this.terms.length;
    return this.terms.filter(t => t.category === category).length;
  }

  hasTermsForLetter(letter: string): boolean {
    return this.terms.some(t => t.word.toUpperCase().startsWith(letter));
  }

  highlightText(text: string, search: string): string {
    if (!search || !search.trim()) return text;
    const regex = new RegExp(`(${search.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark class="bg-cyan-500/30 text-cyan-200 rounded px-0.5">$1</mark>');
  }

  copyLink(slug: string) {
    const url = `${window.location.origin}${window.location.pathname}#${slug}`;
    navigator.clipboard.writeText(url).then(() => {
      alert('Enlace copiado al portapapeles');
    });
  }

  openWhatsapp(text: string) {
    const url = `https://wa.me/34621660580?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  get filteredTerms() {
    return this.terms.filter(t => {
      const matchesSearch = t.word.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          t.definition.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.selectedCategory === 'Todos' || t.category === this.selectedCategory;
      const matchesLetter = !this.selectedLetter || t.word.toUpperCase().startsWith(this.selectedLetter);
      
      return matchesSearch && matchesCategory && matchesLetter;
    });
  }
}
