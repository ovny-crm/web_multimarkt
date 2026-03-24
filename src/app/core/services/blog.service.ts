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
        <p>En Multi-Markt ofrecemos soluciones multi-operador que garantizan que nunca te quedes desconectado. Si Digi te está dando problemas, nuestro comparador te ayudará a encontrar la red más estable en tu domicilio exacto.</p>
      `,
      date: '2026-03-24',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
      author: 'Equipo Multi-Markt',
      category: 'Servicios',
      tags: ['Digi', 'Internet', 'Averías', 'Fibra'],
    },
    {
      id: '2',
      slug: 'ventajas-ahorro-energia-2026',
      title: 'Cómo ahorrar un 30% en tu factura de la luz este 2026',
      excerpt: 'El mercado energético está cambiando. Descubre los trucos y las mejores tarifas para reducir tu gasto mensual sin cambiar tus hábitos.',
      content: '<p>Contenido detallado sobre ahorro energético...</p>',
      date: '2026-03-20',
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
