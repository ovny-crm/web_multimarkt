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
      id: '15',
      slug: 'starlink-espana-alternativa-apagones-red',
      title: 'Starlink en España: ¿La solución definitiva ante posibles apagones de red?',
      excerpt: 'Con la inestabilidad global actual, los satélites de Musk se posicionan como el plan B perfecto. Analizamos su coste y viabilidad en mayo de 2026.',
      content: `
        <p>En un contexto de <strong>incertidumbre geopolítica</strong>, la dependencia de la infraestructura terrestre de fibra óptica empieza a ser vista como una vulnerabilidad. Starlink ofrece algo que ninguna otra operadora puede: independencia total del cable.</p>
        
        <h2>¿Por qué considerar satélite ahora?</h2>
        <p>Los recientes ciberataques a infraestructuras críticas en Europa han puesto en alerta a las empresas. El <strong>internet satelital</strong> ya no es solo para barcos o casas de campo; es una estrategia de continuidad de negocio.</p>
        
        <ul>
          <li><strong>Latencia:</strong> Reducida a menos de 30ms en la zona de Levante.</li>
          <li><strong>Instalación:</strong> Autoinstalable en 10 minutos.</li>
          <li><strong>Resiliencia:</strong> Inmune a cortes de cables submarinos o sabotajes terrestres.</li>
        </ul>

        <blockquote>"No pongas todos tus huevos en la misma cesta de fibra. El cielo es el nuevo respaldo."</blockquote>
      `,
      date: '2026-05-15',
      image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800',
      author: 'Equipo Tech Multi-Markt',
      category: 'Futuro',
      tags: ['Starlink', 'Satélite', 'Resiliencia', 'Seguridad'],
    },
    {
      id: '14',
      slug: 'ia-ahorro-energetico-realidad-marketing-2026',
      title: 'IA y el ahorro energético: ¿Realidad o puro Marketing en 2026?',
      excerpt: 'Todo el mundo habla de Inteligencia Artificial aplicado a la luz, pero ¿realmente baja tu factura? Lo probamos en Multi-Markt.',
      content: `
        <p>Llegados a mayo de 2026, la palabra IA está en todas las tarifas de luz. Pero en Multi-Markt hemos pasado los últimos meses auditando estos algoritmos de "auto-ahorro".</p>
        
        <h2>Lo que la IA sí hace por ti</h2>
        <p>Los nuevos contadores inteligentes conectados a modelos como <strong>EnergyGPT</strong> permiten predecir picos de precio con una precisión del 98%. Esto permite a tus electrodomésticos inteligentes autogestionarse.</p>
        
        <ul>
          <li><strong>Predicción de precios:</strong> La IA compra energía cuando está a precio negativo (sí, sigue pasando gracias a las renovables).</li>
          <li><strong>Detección de fugas:</strong> Identifica consumos fantasma que ni tú sabías que tenías.</li>
        </ul>

        <blockquote>"La IA no ahorra dinero por ser inteligente, ahorra dinero por no olvidar apagar lo que tú olvidas."</blockquote>
      `,
      date: '2026-05-10',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      author: 'Asesor Energético IA',
      category: 'Energía',
      tags: ['IA', 'Ahorro', 'Luz', 'Tecnología'],
    },
    {
      id: '13',
      slug: 'impacto-conflictos-globales-factura-luz-fibra',
      title: 'Conflictos globales: Cómo la tensión internacional influye en tu WiFi',
      excerpt: 'La guerra y las tensiones en las rutas de suministro afectan al precio de los componentes y la energía. Te contamos cómo protegerte.',
      content: `
        <p>La situación internacional actual está golpeando directamente al bolsillo de los españoles. No es solo la gasolina; es el <strong>coste de mantenimiento de los servidores</strong> y la electricidad que los alimenta.</p>
        
        <h2>Efecto dominó en las operadoras</h2>
        <p>El encarecimiento de los metales raros está retrasando la renovación de routers 6G. Las operadoras nacionales están empezando a repercutir este coste en las cuotas mensuales.</p>
        
        <ul>
          <li><strong>Energía:</strong> La volatilidad del gas por el conflicto afecta al precio del kWh.</li>
          <li><strong>Hardware:</strong> Los routers ahora valen un 20% más que hace un año.</li>
        </ul>
        
        <p>En Multi-Markt recomendamos <strong>blindar contratos</strong> ahora antes de la subida general que se espera para finales de mayo.</p>
      `,
      date: '2026-04-25',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
      author: 'Analista de Mercado',
      category: 'Economía',
      tags: ['Geopolítica', 'Ahorro', 'Inflación', 'Energía'],
    },
    {
      id: '12',
      slug: 'ciberseguridad-hogar-protege-wifi-nuevos-ataques',
      title: 'Ciberseguridad 2026: Tu router es la primera línea de defensa',
      excerpt: 'Con el aumento de los conflictos híbridos, el espionaje doméstico y los secuestros de red están al alza. No seas el siguiente.',
      content: `
        <p>Ya no solo hackean bancos. Ahora los <strong>bots de guerra híbrida</strong> buscan routers vulnerables para crear redes de ataque. Tu conexión de casa podría estar siendo usada para atacar infraestructuras sin que lo sepas.</p>
        
        <h2>Pasos críticos de seguridad</h2>
        <p>Si aún tienes la contraseña que venía debajo de tu router, estás en peligro. En nuestra tienda en Elche estamos ayudando a cientos de vecinos a securizar sus redes.</p>
        
        <ul>
          <li><strong>DNS Seguros:</strong> Cambia a DNS que bloqueen malware por defecto.</li>
          <li><strong>WPA3:</strong> Asegúrate de que tu router usa el estándar de encriptación más moderno.</li>
          <li><strong>Actualización:</strong> Los firmwares antiguos son puertas abiertas.</li>
        </ul>
      `,
      date: '2026-04-10',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
      author: 'Equipo Seguridad Multi-Markt',
      category: 'Seguridad',
      tags: ['WiFi', 'Hackeo', 'Seguridad', 'Router'],
    },
    {
      id: '11',
      slug: 'fin-del-cobre-abril-2026-que-hacer',
      title: 'El fin definitivo del cobre: ¿Qué pasará con tu línea fija este abril?',
      excerpt: 'Telefónica completa el apagado de las centrales de cobre. Si aún no tienes fibra, podrías quedarte incomunicado.',
      content: `
        <p>Es oficial. Abril de 2026 marca el <strong>funeral del ADSL y el cobre</strong> en España. Lo que empezó hace años termina ahora, y todavía hay miles de hogares que no han hecho la transición.</p>
        
        <h2>¿Qué tienes que hacer?</h2>
        <p>Si recibes una carta de tu operador sobre el cierre de tu centralita, no la ignores. No es un spam comercial; es un aviso técnico real.</p>
        
        <ul>
          <li><strong>Migración:</strong> La mayoría de operadoras te pasan a fibra gratis.</li>
          <li><strong>Teléfonos antiguos:</strong> Necesitarás un adaptador o un teléfono IP/Móvil.</li>
          <li><strong>Alarmas:</strong> Revisa tu sistema de alarma, muchas antiguas dependen del cobre.</li>
        </ul>
      `,
      date: '2026-04-02',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
      author: 'Equipo Multi-Markt',
      category: 'Noticias',
      tags: ['Cobre', 'ADSL', 'Fibra', 'Telefónica'],
    },
    {
      id: '1',
      slug: 'que-hacer-cuando-falla-digi-guia-completa',
      title: '¿Qué hacer cuando falla Digi? Guía completa y alternativas',
      excerpt: 'Si tu conexión de Digi no funciona, no te desesperes. Te explicamos los pasos para solucionar problemas comunes y qué alternativas tienes si los fallos son recurrentes.',
      content: `
        <p>Digi se ha convertido en uno de los operadores más populares en España, pero como cualquier compañía, no está libre de fallos técnicos. Si te encuentras sin internet o sin línea móvil, aquí tienes una <strong>guía de supervivencia</strong>.</p>
        
        <h2>1. Reinicia tus equipos</h2>
        <p>Parece obvio, pero el <strong>80% de los problemas</strong> se solucionan apagando el router y volviéndolo a encender tras 30 segundos. Esto refresca la conexión y limpia la memoria del dispositivo.</p>
        
        <h2>2. Comprueba si es un fallo general</h2>
        <p>Antes de llamar al soporte técnico, usa plataformas como <em>Downdetector</em> para ver si otros usuarios están reportando lo mismo en tu zona. Si es masivo, solo queda esperar.</p>
        
        <h2>3. Problemas recurrentes con la red de Digi</h2>
        <p>Muchos usuarios reportan latencia alta o micro-cortes en determinadas horas pico. Si esto te sucede a menudo, puede ser debido a:</p>
        <ul>
          <li>Saturación de la infraestructura en tu zona geográfica.</li>
          <li>Uso de CG-NAT (puedes solicitar salir de él).</li>
          <li>Hardware del router con limitaciones de procesamiento.</li>
        </ul>
        
        <blockquote>"La estabilidad es la clave para un teletrabajo eficiente. Si tu red falla, fallas tú." - Equipo Multi-Markt</blockquote>

        <h2>4. La mejor alternativa si buscas estabilidad</h2>
        <p>En <strong>Multi-Markt</strong> ofrecemos soluciones multi-operador que garantizan que nunca te quedes desconectado, eligiendo la red con mejor cobertura en tu calle exacta.</p>
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
        <p>Vodafone es conocido por sus servicios premium, pero también por sus <strong>subidas de precio anuales</strong> ligadas al IPC. Aquí te explicamos cómo evitar pagar de más y recuperar el control de tu gasto.</p>
        
        <h2>Revisa tus servicios adicionales</h2>
        <p>A menudo pagas por servicios como <strong>Secure Net</strong> o paquetes de televisión que no usas. Desactivarlos puede suponerte un ahorro de hasta <strong>10€ al mes</strong> sin perder calidad de conexión.</p>
        
        <h2>Alternativas con la misma red</h2>
        <p>No tienes por qué cambiar de cobertura si estás contento con Vodafone. Existen OMVs (Operadores Móviles Virtuales) que usan su red por una fracción del coste original:</p>
        <ul>
          <li>Lowi (Segunda marca oficial)</li>
          <li>Finetwork</li>
          <li>Alternativas locales personalizadas</li>
        </ul>

        <blockquote>"No pagues por el nombre, paga por el servicio que realmente consumes."</blockquote>
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
      content: `
        <p>O2 ha ganado terreno con su lema de "sencillez y paz mental". Pero en Multi-Markt creemos que la <strong>personalización</strong> es lo que realmente ahorra dinero a largo plazo.</p>
        <h2>Diferencias clave</h2>
        <p>Mientras O2 ofrece paquetes cerrados, en nuestra tienda en Elche podemos:</p>
        <ul>
          <li>Combinar líneas de diferentes redes si es necesario.</li>
          <li>Ajustar el almacenamiento de datos a tu uso real.</li>
          <li>Ofrecerte soporte presencial inmediato.</li>
        </ul>
      `,
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
      content: `
        <p>Lowi sigue siendo un referente en el mercado low-cost. Su integración con el <strong>5G de Vodafone</strong> le da una ventaja competitiva brutal este año.</p>
        <h2>¿Por qué elegir Lowi ahora?</h2>
        <ul>
          <li>Acumulación de gigas no consumidos.</li>
          <li>Velocidades de fibra simétrica reales.</li>
          <li>Sin permanencias abusivas.</li>
        </ul>
      `,
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
      content: `
        <p>En la zona de Levante, operadoras como <strong>Aproob</strong> ofrecen una cercanía que las multinacionales no pueden igualar. Pero, ¿la tecnología está a la altura?</p>
        <h2>Ventajas del operador local</h2>
        <ul>
          <li>Instaladores propios que conocen tu edificio.</li>
          <li>Facturas claras sin "errores" informáticos globales.</li>
          <li>Apoyo a la economía de tu región.</li>
        </ul>
      `,
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
      content: `
        <p>Redi es otra opción interesante para fibra. Sin embargo, cuando surge un problema un domingo por la tarde, contar con un <strong>WhatsApp directo</strong> de tu asesor en Multi-Markt no tiene precio.</p>
      `,
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
      content: `
        <p>Avatel ha desplegado fibra en muchísimos municipios pequeños. En algunos casos son la única opción, pero en otros, podemos ofrecerte <strong>soluciones satelitales o 4G/5G en casa</strong> que funcionan mejor.</p>
      `,
      date: '2026-02-28',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
      author: 'Equipo Multi-Markt',
      category: 'Fibra',
      tags: ['Avatel', 'Fibra Rural', 'Pueblos'],
    },
    {
      id: '8',
      slug: 'orange-packs-ahorro-o-exceso',
      title: 'Packs de Orange: ¿Realmente ahorras o te sobran servicios?',
      excerpt: 'Orange ofrece packs muy completos, pero a menudo incluyen cosas que no usas. Te enseñamos a optimizar tu combinado.',
      content: `
        <p>Orange Love es potente, pero viene cargado de servicios. Si no ves fútbol o no necesitas 4 líneas móviles, estás <strong>regalando dinero a la compañía</strong>.</p>
        <h2>Cómo optimizar Orange</h2>
        <ul>
          <li>Cambia a tarifas solo fibra+móvil si no usas la TV.</li>
          <li>Revisa si el seguro del terminal sigue siendo necesario.</li>
        </ul>
      `,
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
      content: `
        <p>Todo el mundo quiere la red de Movistar por su estabilidad, pero pocos quieren pagar 100€ al mes. <strong>O2</strong> y otras marcas que gestionamos en Multi-Markt te dan la misma red por menos de la mitad.</p>
      `,
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
      content: `
        <p>Ahorrar en luz no es solo apagar bombillas. Es elegir la <strong>tarifa con discriminación horaria</strong> que se adapte a tu vida.</p>
        <h2>Consejos rápidos</h2>
        <ul>
          <li>Usa electrodomésticos en horas valle.</li>
          <li>Revisa tu potencia contratada. ¡Casi todo el mundo paga de más por esto!</li>
        </ul>
      `,
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

  getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
    return this.posts
      .filter(p => p.id !== currentPost.id) // No incluir el mismo post
      .map(p => {
        // Calcular "score" de relación
        let score = 0;
        if (p.category === currentPost.category) score += 5;
        const commonTags = p.tags.filter(t => currentPost.tags.includes(t));
        score += commonTags.length * 2;
        return { post: p, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.post);
  }
}
