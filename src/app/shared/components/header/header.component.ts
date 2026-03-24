import { Component, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <!-- Logo -->
            <a routerLink="/" class="flex items-center gap-3">
                <img src="assets/images/logo-planeta-multi-markt.png" alt="Multi Markt Logo"
                    class="w-10 h-10 object-contain drop-shadow-md">
                <span class="text-xl font-bold text-white tracking-tight uppercase">Multi <span
                        class="text-cyan-400">Markt</span></span>
            </a>

            <!-- Nav Links -->
            <div class="hidden md:flex items-center gap-8">
                <a routerLink="/" class="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-wider">Inicio</a>
                <a routerLink="/blog" class="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-wider">Blog</a>
                <a routerLink="/glosario" class="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-wider">Glosario</a>
            </div>

            <!-- CTA Button Navbar (WhatsApp) -->
            <button (click)="openWhatsapp('Hola, me gustaría comparar tarifas.')"
                class="flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-sm font-bold rounded-full hover:bg-green-600 transition-all hover:-translate-y-0.5 shadow-lg shadow-green-500/20">
                <span>💬 Contactar</span>
            </button>
        </nav>
    </header>
  `
})
export class HeaderComponent {
  private platformId = inject(PLATFORM_ID);

  openWhatsapp(text: string) {
    if (isPlatformBrowser(this.platformId)) {
      const url = `https://wa.me/34621660580?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    }
  }
}
