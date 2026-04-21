export interface LandingPageData {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  benefitsTitle: string;
  benefits: { icon: string; title: string; text: string }[];
  comparisonTitle: string;
  comparisonPoints: { icon: string; text: string }[];
  ctaTitle: string;
  ctaText: string;
  whatsappMessage: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

export const LANDING_PAGES: Record<string, LandingPageData> = {
  'fibra-barata-elche': {
    slug: 'fibra-barata-elche',
    badge: 'Ofertas Fibra Elche 2026',
    title: 'La Fibra más barata de Elche está aquí',
    subtitle: 'Navega a máxima velocidad sin pagar de más',
    description: 'En Multi-Markt Elche comparamos todas las operadoras locales y nacionales para ofrecerte la conexión más estable al precio más bajo garantizado.',
    benefitsTitle: 'Por qué contratar tu fibra con nosotros',
    benefits: [
      { icon: '🚀', title: 'Velocidad Real', text: 'Fibra simétrica de hasta 1Gbps en todo Elche.' },
      { icon: '⭐', title: 'Instalación Gratis', text: 'En la mayoría de operadores nos encargamos de todo.' },
      { icon: '🛡️', title: 'Sin Sorpresas', text: 'Precios finales con IVA y cuota de línea incluidos.' }
    ],
    comparisonTitle: 'Lo que te ofrecemos en nuestra tienda',
    comparisonPoints: [
      { icon: '✅', text: 'Comparativa de más de 10 operadores en un solo lugar.' },
      { icon: '✅', text: 'Asesoramiento humano, sin esperas telefónicas.' },
      { icon: '✅', text: 'Gestión directa de altas y portabilidades.' }
    ],
    ctaTitle: '¿Quieres saber cuál es la mejor oferta hoy?',
    ctaText: 'Consultar ofertas de Fibra',
    whatsappMessage: 'Hola! He visto vuestra web y me gustaría saber cuál es la fibra más barata que tenéis disponible en Elche ahora mismo.',
    seo: {
      title: 'Fibra Barata en Elche | Comparador de Internet 2026',
      description: 'Buscas la fibra más barata en Elche? En Multi-Markt comparamos Digi, Lowi, O2, Orange y más para que pagues menos por tu internet. ¡Asesoría gratuita!',
      keywords: 'fibra barata elche, internet barato elche, ofertas fibra elche, contratar internet elche, mejores tarifas fibra elche'
    }
  },
  'movil-barato-elche': {
    slug: 'movil-barato-elche',
    badge: 'Tarifas Móvil Económicas',
    title: 'Tarifas Móvil al mejor precio en Elche',
    subtitle: 'Gigas ilimitados y 5G sin pagar una fortuna',
    description: '¿Tu factura del móvil no deja de subir? En Multi-Markt Elche te ayudamos a encontrar el plan perfecto con la mejor cobertura en tu zona.',
    benefitsTitle: 'Ventajas de nuestras tarifas móvil',
    benefits: [
      { icon: '📱', title: '5G Incluido', text: 'Máxima velocidad de navegación en toda España.' },
      { icon: '🔄', title: 'Acumula Gigas', text: 'Si no los usas, los guardas para el mes siguiente.' },
      { icon: '🌍', title: 'Roaming EU', text: 'Usa tu móvil en Europa como si estuvieras en casa.' }
    ],
    comparisonTitle: 'Comparamos las mejores redes por ti',
    comparisonPoints: [
      { icon: '✅', text: 'Red Movistar, Vodafone y Orange disponibles.' },
      { icon: '✅', text: 'Líneas adicionales con descuentos exclusivos.' },
      { icon: '✅', text: 'Sin permanencia en la mayoría de nuestras tarifas.' }
    ],
    ctaTitle: '¿Pagas más de 15€ por tu móvil? Te lo bajamos',
    ctaText: 'Ver tarifas de móvil',
    whatsappMessage: 'Hola! Pago demasiado por mi móvil. ¿Me podéis decir qué tarifas tenéis baratas con muchos gigas en Elche?',
    seo: {
      title: 'Tarifas Móvil Baratas en Elche | Ahorra en tu línea 2026',
      description: 'Las mejores tarifas de móvil en Elche con 5G y gigas ilimitados. Ven a Multi-Markt y te bajamos la factura del móvil garantizado.',
      keywords: 'movil barato elche, tarifa movil barata elche, ahorrar factura movil, gigas ilimitados elche, mejor cobertura elche'
    }
  },
  'ahorrar-factura-internet': {
    slug: 'ahorrar-factura-internet',
    badge: 'Expertos en Ahorro',
    title: 'Cómo ahorrar en tu factura de Internet y Móvil',
    subtitle: 'No regales dinero a las grandes operadoras',
    description: 'Nuestro equipo de expertos en Elche analiza tu factura actual gratis. Encontramos costes ocultos y te cambiamos a la mejor oferta del mercado.',
    benefitsTitle: 'Nuestro método de ahorro',
    benefits: [
      { icon: '🔍', title: 'Auditoría Gratis', text: 'Analizamos concepto por concepto tu factura actual.' },
      { icon: '⏱️', title: 'En 5 Minutos', text: 'Tardamos nada en decirte cuánto puedes ahorrar cada mes.' },
      { icon: '💼', title: 'Gestión Total', text: 'Nos encargamos de todo el papeleo del cambio.' }
    ],
    comparisonTitle: '¿Por qué confiar en Multi-Markt?',
    comparisonPoints: [
      { icon: '✅', text: 'Somos una tienda física en Elche, no un Call Center.' },
      { icon: '✅', text: 'Interés real en que pagues menos, no en venderte de más.' },
      { icon: '✅', text: 'Soporte post-venta directo y personal.' }
    ],
    ctaTitle: 'Envíanos un mensaje y empezamos a ahorrar',
    ctaText: 'Empezar a ahorrar ya',
    whatsappMessage: 'Hola! Quiero ahorrar en mi factura de internet. ¿Podéis analizar mi caso? Estoy con [mi operador actual].',
    seo: {
      title: 'Cómo Ahorrar en la Factura de Internet | Multi-Markt Elche',
      description: 'Te enseñamos cómo pagar menos por internet y móvil en Elche. Análisis gratuito de facturas y asesoramiento personalizado para particulares y empresas.',
      keywords: 'ahorrar factura internet, pagar menos internet elche, asesor telecomunicaciones elche, reducir factura movil, comparador ahorro'
    }
  }
};
