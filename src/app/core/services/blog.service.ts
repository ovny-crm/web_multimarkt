import { Injectable } from '@angular/core';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  author: string;
  category: string;
  tags: string[];
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private posts: BlogPost[] = [
    {
      id: '1',
      slug: 'que-hacer-cuando-falla-digi-guia-completa',
      title: '¿Qué hacer cuando falla Digi? Guía completa y alternativas',
      excerpt: 'Si tu conexión de Digi no funciona, no te desesperes. Te explicamos los pasos para solucionar problemas comunes y qué alternativas tienes si los fallos son recurrentes.',
      content: `
        <p>Digi se ha convertido en uno de los operadores más populares en España, pero como cualquier compañía, no está libre de fallos técnicos. Si te encuentras sin internet o sin línea móvil, aquí tienes una guía de supervivencia.</p>
        <h2>1. Reinicia tus equipos</h2>
        <p>Parece obvio, pero el 80% de los problemas se solucionan apagando el router y volviéndolo a encender tras 30 segundos.</p>
        <h2>2. Comprueba si es un fallo general</h2>
        <p>Usa plataformas como Downdetector para ver si otros usuarios están reportando lo mismo en tu zona.</p>
        <h2>3. Problemas recurrentes con Digi</h2>
        <p>Muchos usuarios reportan latencia alta o micro-cortes en determinadas horas. Si esto te sucede a menudo, puede que la infraestructura en tu zona esté saturada.</p>
        <h2>4. La mejor alternativa si buscas estabilidad</h2>
        <p>En Multi-Markt ofrecemos soluciones multi-operador que garantizan que nunca te quedes desconectado.</p>
      `,
      date: '2026-03-24',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
      author: 'Equipo Multi-Markt',
      category: 'Servicios',
      tags: ['Digi', 'Internet', 'Averías', 'Fibra'],
    },
    {
      id: '2',
      slug: 'vodafone-factura-inflada-trucos-ahorro',
      title: '¿Factura inflada en Vodafone? Descubre cómo bajarla un 40%',
      excerpt: 'Muchos clientes de Vodafone ven cómo su factura sube sin previo aviso. Te contamos los trucos para renegociar o encontrar alternativas más baratas.',
      content: `
        <p>Vodafone es conocido por sus servicios premium, pero también por sus subidas de precio anuales ligadas al IPC. Aquí te explicamos cómo evitar pagar de más.</p>
        <h2>Revisa tus servicios adicionales</h2>
        <p>A veces pagas por Secure Net o servicios de televisión que no usas. Desactivarlos puede ahorrarte hasta 10€ al mes.</p>
        <h2>Alternativas con la misma red</h2>
        <p>Existen OMVs que usan su red por una fracción del coste.</p>
      `,
      date: '2026-03-22',
      image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800',
      author: 'Equipo Multi-Markt',
      category: 'Ahorro',
      tags: ['Vodafone', 'Factura', 'Ahorro'],
    },
    {
      id: '3',
      slug: 'o2-versus-multimarkt-fibra-sencilla',
      title: 'O2 vs Multi-Markt: ¿Es realmente la fibra más sencilla?',
      excerpt: 'O2 presume de sencillez, pero ¿es la mejor opción para tu hogar? Comparamos su oferta con las soluciones personalizadas de Multi-Markt.',
      content: '<p>Comparativa detallada entre O2 y otras opciones de mercado...</p>',
      date: '2026-03-18',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
      author: 'Equipo Multi-Markt',
      category: 'Comparativas',
      tags: ['O2', 'Fibra', 'Opiniones'],
    },
    {
      id: '4',
      slug: 'lowi-mejor-red-mismo-precio',
      title: 'Lowi y el ahorro inteligente: Comparativa de red 5G en 2026',
      excerpt: '¿Vale la pena seguir en Lowi o hay opciones con mejor 5G por el mismo precio? Analizamos su rendimiento actual.',
      content: '<p>Análisis de la red de Lowi y alternativas competitivas...</p>',
      date: '2026-03-15',
      image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800',
      author: 'Equipo Multi-Markt',
      category: 'Móvil',
      tags: ['Lowi', '5G', 'Móvil'],
    },
    {
      id: '5',
      slug: 'aproob-operadoras-locales-merecen-la-pena',
      title: 'Aproob y las operadoras locales: ¿Merecen la pena frente a las grandes?',
      excerpt: 'Las operadoras locales como Aproob ganan terreno. Te contamos qué ventajas tienen y cuándo es mejor optar por una nacional.',
      content: '<p>Ventajas y desventajas de las operadoras locales...</p>',
      date: '2026-03-10',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800',
      author: 'Equipo Multi-Markt',
      category: 'Local',
      tags: ['Aproob', 'Fibra Local', 'Opiniones'],
    },
    {
      id: '6',
      slug: 'redi-atencion-al-cliente-comparativa',
      title: 'Atención al cliente: Redi vs la cercanía de Multi-Markt',
      excerpt: 'En un mundo digital, la atención humana marca la diferencia. Comparamos el soporte de Redi con nuestro asesoramiento local.',
      content: '<p>Por qué la atención local en tienda física y WhatsApp es superior...</p>',
      date: '2026-03-05',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
      author: 'Equipo Multi-Markt',
      category: 'Atención',
      tags: ['Redi', 'Soporte', 'Cercanía'],
    },
    {
      id: '7',
      slug: 'avatel-fibra-rural-alternativas',
      title: 'Fibra rural: Avatel o soluciones personalizadas Multi-Markt',
      excerpt: 'Llegar donde otros no llegan es el lema de Avatel. Pero, ¿hay mejores opciones en tu pueblo? Lo descubrimos.',
      content: '<p>Análisis de conectividad en zonas rurales y alternativas...</p>',
      date: '2026-02-28',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80&w=800',
      author: 'Equipo Multi-Markt',
      category: 'Fibra',
      tags: ['Avatel', 'Fibra Rural', 'Pueblos'],
    },
    {
      id: '8',
      slug: 'orange-packs-ahorro-o-exceso',
      title: 'Packs de Orange: ¿Realmente ahorras o te sobran servicios?',
      excerpt: 'Orange ofrece packs muy completos, pero a menudo incluyen cosas que no usas. Te enseñamos a optimizar tu combinado.',
      content: '<p>Desglose de los combinados de Orange y cómo optimizarlos...</p>',
      date: '2026-02-20',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
      author: 'Equipo Multi-Markt',
      category: 'Tarifas',
      tags: ['Orange', 'Combinados', 'Optimización'],
    },
    {
      id: '9',
      slug: 'movistar-premium-calidad-sin-sobrecoste',
      title: 'Movistar y el efecto Premium: Calidad sin pagar de más',
      excerpt: 'Movistar es el referente en calidad, pero su precio asusta. Te mostramos cómo tener su red sin su factura.',
      content: '<p>Cómo acceder a la red de Movistar a través de segundas marcas...</p>',
      date: '2026-02-15',
      image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=800',
      author: 'Equipo Multi-Markt',
      category: 'Premium',
      tags: ['Movistar', 'Calidad', 'Precio'],
    },
    {
      id: '10',
      slug: 'ventajas-ahorro-energia-2026',
      title: 'Cómo ahorrar un 30% en tu factura de la luz este 2026',
      excerpt: 'El mercado energético está cambiando. Descubre los trucos y las mejores tarifas para reducir tu gasto mensual sin cambiar tus hábitos.',
      content: '<p>Contenido detallado sobre ahorro energético...</p>',
      date: '2026-02-01',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
      author: 'Asesor Energético',
      category: 'Energía',
      tags: ['Ahorro', 'Tarifa Luz', 'Eficiencia'],
    }
  ];

  getPosts() {
    return this.posts;
  }

  getPostBySlug(slug: string) {
    return this.posts.find((p) => p.slug === slug);
  }

  getLatestPosts(limit: number = 3) {
    return this.posts.slice(0, limit);
  }
}
