import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StickyWhatsappButtonComponent } from '../../shared/components/sticky-whatsapp-button/sticky-whatsapp-button.component';
import { LeadFormComponent } from '../../shared/components/lead-form/lead-form.component';
import { SeoService } from '../../core/services/seo.service';

interface Service {
    id: number;
    name: string;
    description: string;
    icon: string;
    features: string[];
}

interface Operator {
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
        StickyWhatsappButtonComponent,
        LeadFormComponent
    ],
    templateUrl: './home.component.html'
})
export class HomeComponent {
    constructor(
        private seoService: SeoService,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        this.seoService.updateTitle('Multi Markt - Comparador de Telecomunicaciones y Energía en Elche');
        this.seoService.updateMetaTags({
            description: 'Ahorra en tus facturas con Multi Markt. Compara Fibra, Móvil, Fútbol y Energía en Elche.',
            url: 'https://web-multimarkt.pages.dev/'
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
        { id: 1, name: 'O2', logo: 'assets/images/logos/O2.svg' },
        { id: 2, name: 'Vodafone', logo: 'assets/images/logos/Vodafone.svg' },
        { id: 3, name: 'Avatel', logo: 'assets/images/logos/Avatel.svg' },
        { id: 4, name: 'Lowi', logo: 'assets/images/logos/Lowi.svg' },
        { id: 5, name: 'Aproop!', logo: 'assets/images/logos/Aproop!.svg' },
        { id: 6, name: 'Orange', logo: 'assets/images/logos/Orange.svg' },
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
