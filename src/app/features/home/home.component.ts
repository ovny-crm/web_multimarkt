import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LeadFormComponent } from '../../shared/components/lead-form/lead-form.component';
import { SeoService } from '../../core/services/seo.service';
import { SavingCalculatorComponent } from '../../shared/components/saving-calculator/saving-calculator.component';
import { PricingTableComponent } from '../../shared/components/pricing-table/pricing-table.component';
import { HomeHeroComponent } from './components/home-hero/home-hero.component';
import { HomeOperatorsComponent } from './components/home-operators/home-operators.component';
import { HomeServicesListComponent } from './components/home-services-list/home-services-list.component';
import { HomeAboutUsComponent } from './components/home-about-us/home-about-us.component';
import { HomeFaqComponent } from './components/home-faq/home-faq.component';
import { HomeServicesGridComponent } from './components/home-services-grid/home-services-grid.component';
import { HomeCtaCalculateComponent } from './components/home-cta-calculate/home-cta-calculate.component';
import { HomeContactSectionComponent } from './components/home-contact/home-contact.component';
import { HomeContactModalComponent } from './components/home-contact-modal/home-contact-modal.component';

export interface Service {
    id: number;
    name: string;
    description: string;
    icon: string;
    features: string[];
}

export interface Operator {
    id: number;
    name: string;
    logo: string;
}

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        LeadFormComponent,
        SavingCalculatorComponent,
        PricingTableComponent,
        NgOptimizedImage,
        HomeHeroComponent,
        HomeOperatorsComponent,
        HomeServicesListComponent,
        HomeAboutUsComponent,
        HomeFaqComponent,
        HomeServicesGridComponent,
        HomeCtaCalculateComponent,
        HomeContactSectionComponent,
        HomeContactModalComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    constructor(
        private seoService: SeoService,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        this.seoService.updateTags({
            title: 'Mejor Comparador de Fibra, Móvil y Energía en Elche',
            description: 'Ahorra hasta un 30% en tus facturas. Compara las mejores tarifas de Fibra Óptica, Móvil, Fútbol y Energía con Multi Markt en Elche. Atención personalizada.',
            url: 'https://multimarkt.ovny.net/'
        });

        this.seoService.updateStructuredData({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Telecomunicaciones y Energía",
            "provider": {
                "@type": "LocalBusiness",
                "name": "Multi Markt",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Carrer Josep Bernad Amorós, 108",
                    "addressLocality": "Elx",
                    "addressRegion": "Alicante",
                    "postalCode": "03205",
                    "addressCountry": "ES"
                }
            },
            "areaServed": {
                "@type": "City",
                "name": "Elche"
            },
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicios de Multi Markt",
                "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fibra Óptica" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tarifas Móvil" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pack Fútbol" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Luz y Gas" } }
                ]
            }
        });

        const faqs = [
            {
                question: '¿Qué necesito para que Multi Markt analice mi factura?',
                answer: 'Solo necesitas una factura reciente (en PDF o foto). Nuestro equipo la analiza para encontrar servicios innecesarios o tarifas más baratas.'
            },
            {
                question: '¿Tengo que pagar algo por el asesoramiento?',
                answer: 'No. El servicio de comparación y asesoramiento de Multi-Markt es 100% gratuito para el cliente.'
            },
            {
                question: '¿Cuánto tiempo tarda el proceso de cambio de compañía?',
                answer: 'Normalmente entre 2 y 5 días hábiles, dependiendo del tipo de servicio (fibra o móvil). Nosotros nos encargamos de toda la gestión.'
            },
            {
                question: '¿Puedo contratar fibra aunque no viva en Elche?',
                answer: 'Sí, trabajamos con operadoras nacionales como O2, Vodafone y Orange que tienen cobertura en toda España.'
            }
        ];
        this.seoService.setFaqSchema(faqs);

        this.seoService.setStructuredData({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Multi Markt",
            "url": "https://multimarkt.ovny.net",
            "logo": "https://multimarkt.ovny.net/assets/images/logo-planeta-multi-markt.png",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+34621660580",
                "contactType": "customer service",
                "areaServed": "ES",
                "availableLanguage": "Spanish"
            },
            "sameAs": [
                "https://wa.me/34621660580"
            ]
        }, 'org-schema');
    }
    currentYear = new Date().getFullYear();

    // State
    isScrolled = false;
    mobileMenuOpen = false;
    showBackToTop = false;
    showContactModal = false;
    selectedService = '';

    // Servicios de telecomunicaciones
    services: Service[] = [
        {
            id: 1,
            name: 'Fibra Óptica',
            description: 'Conexión ultrarrápida hasta 1Gbps para tu hogar',
            icon: '🌐',
            features: ['Hasta 1000 Mb', 'Sin límites', 'Router incluido']
        },
        {
            id: 2,
            name: 'Móvil',
            description: 'Tarifas con datos ilimitados y las mejores coberturas',
            icon: '📱',
            features: ['Datos ilimitados', '5G incluido', 'Roaming EU']
        },
        {
            id: 3,
            name: 'Pack Fútbol',
            description: 'Todo el fútbol en casa: Liga, Champions y más',
            icon: '⚽',
            features: ['LaLiga', 'Champions', 'DAZN']
        },
        {
            id: 4,
            name: 'Energía',
            description: 'Luz y Gas al mejor precio, sin sorpresas',
            icon: '💡',
            features: ['Luz verde', 'Sin permanencia', 'Ahorro real']
        },
        {
            id: 5,
            name: 'Televisión',
            description: 'Las mejores plataformas de streaming y canales',
            icon: '📺',
            features: ['Series y Cine', 'Documentales', 'Infantil']
        },
    ];

    // Operadores con los que trabajamos
    operators: Operator[] = [
        { id: 1, name: 'Lowi', logo: 'assets/images/logos/Lowi.svg' },
        { id: 2, name: 'Aproop!', logo: 'assets/images/logos/Aproop.svg' },
        { id: 3, name: 'O2', logo: 'assets/images/logos/O2.svg' },
        { id: 7, name: 'Orange', logo: 'assets/images/logos/Orange.svg' },
        { id: 8, name: 'Vodafone', logo: 'assets/images/logos/Vodafone.svg' },
        { id: 4, name: 'Movistar', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Movistar_logo.svg/2560px-Movistar_logo.svg.png' },
        { id: 5, name: 'Redi', logo: 'https://redi.es/wp-content/uploads/2022/01/logo-redi-internet-elche.png' },
        { id: 6, name: 'Avatel', logo: 'assets/images/logos/Avatel.svg' },
    ];

    // Ventajas de usar Multi Markt
    benefits = [
        { icon: '💰', title: 'Ahorro Garantizado', description: 'Encontramos la tarifa más barata para ti' },
        { icon: '🔍', title: 'Comparamos por Ti', description: 'Analizamos todas las operadoras del mercado' },
        { icon: '📞', title: 'Gestión Gratuita', description: 'Nosotros hacemos el cambio, tú solo ahorras' },
        { icon: '⚡', title: 'Rápido y Fácil', description: 'En 5 minutos sabrás cuánto puedes ahorrar' },
    ];

    @HostListener('window:scroll')
    onScroll(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.isScrolled = window.scrollY > 50;
            this.showBackToTop = window.scrollY > 500;
        }
    }

    toggleMobileMenu(): void {
        this.mobileMenuOpen = !this.mobileMenuOpen;
    }

    closeMobileMenu(): void {
        this.mobileMenuOpen = false;
    }

    scrollToTop(): void {
        if (isPlatformBrowser(this.platformId)) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    openContactModal(service?: string): void {
        this.selectedService = service || '';
        this.showContactModal = true;
    }

    openWhatsappDirect(text: string): void {
        if (isPlatformBrowser(this.platformId)) {
            const url = `https://wa.me/34621660580?text=${encodeURIComponent(text)}`;
            window.open(url, '_blank');
        }
    }

    closeContactModal(): void {
        this.showContactModal = false;
        this.selectedService = '';
    }

    onLeadSubmitted(lead: any): void {
        console.log('Lead telecom capturado:', lead);
        this.closeContactModal();
    }
}
