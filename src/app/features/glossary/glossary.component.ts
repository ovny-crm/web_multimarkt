import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  imports: [CommonModule, FormsModule, SafeHtmlPipe],
  templateUrl: './glossary.component.html',
  styleUrl: './glossary.component.scss'
})
export class GlossaryComponent implements OnInit {
  private seoService = inject(SeoService);
  
  currentYear = new Date().getFullYear();
  searchTerm: string = '';
  selectedCategory: string = 'Todos';

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
      
      return matchesSearch && matchesCategory;
    });
  }
}

