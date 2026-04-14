import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService, BlogPost } from '../../core/services/blog.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-social-hub',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <!-- Background Glow Effects -->
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-[120px]"></div>
      </div>

      <div class="relative z-10 flex flex-col items-center justify-start min-h-screen px-6 py-12">
        <!-- Profile Card -->
        <div class="w-full max-w-sm mx-auto flex flex-col items-center">
          
          <!-- Avatar with Glow -->
          <div class="relative mb-6">
            <div class="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full blur-xl opacity-50 scale-110 animate-pulse"></div>
            <img src="assets/images/logo-planeta-multi-markt.png" 
                 alt="Multi Markt Elche" 
                 class="relative z-10 w-28 h-28 rounded-full border-2 border-white/20 p-3 bg-slate-900/80 object-contain shadow-2xl shadow-cyan-500/20">
          </div>

          <!-- Brand Name -->
          <h1 class="text-3xl font-black tracking-tighter uppercase mb-1 text-center">
            Multi <span class="text-cyan-400">Markt</span>
          </h1>
          <p class="text-slate-400 text-sm text-center mb-10 max-w-xs leading-relaxed">
            Ahorro real en Fibra, Móvil y Energía<br>
            📍 Elche · C/ Josep Bernad Amorós 108
          </p>

          <!-- Action Buttons -->
          <div class="w-full space-y-3 mb-14">
            <!-- WhatsApp - Primary -->
            <a (click)="openWhatsapp('Hola! Vengo desde vuestro enlace de perfil y quiero ahorrar.')"
               class="flex items-center justify-between w-full p-4 bg-[#25D366] text-white rounded-2xl font-bold uppercase text-sm tracking-wider shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
              <span class="flex items-center gap-3">
                <span class="text-lg">💬</span>
                <span>WhatsApp Directo</span>
              </span>
              <span class="text-[10px] bg-white/25 px-2.5 py-1 rounded-full font-black animate-pulse">Online</span>
            </a>

            <!-- Google Maps -->
            <a href="https://maps.app.goo.gl/YV9XyM6Q7X5qM3Z96" target="_blank" rel="noopener"
               class="flex items-center justify-between w-full p-4 bg-white/5 border border-white/10 rounded-2xl font-bold uppercase text-sm tracking-wider hover:bg-white/10 hover:border-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all">
              <span class="flex items-center gap-3">
                <span class="text-lg">📍</span>
                <span>Cómo Llegar (Elche)</span>
              </span>
              <span class="text-slate-500 group-hover:text-white transition-colors">→</span>
            </a>

            <!-- Web -->
            <a routerLink="/"
               class="flex items-center justify-between w-full p-4 bg-white/5 border border-white/10 rounded-2xl font-bold uppercase text-sm tracking-wider hover:bg-white/10 hover:border-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all">
              <span class="flex items-center gap-3">
                <span class="text-lg">🏠</span>
                <span>Web Oficial</span>
              </span>
              <span class="text-slate-500">→</span>
            </a>

            <!-- Glosario -->
            <a routerLink="/glosario"
               class="flex items-center justify-between w-full p-4 bg-white/5 border border-white/10 rounded-2xl font-bold uppercase text-sm tracking-wider hover:bg-white/10 hover:border-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all">
              <span class="flex items-center gap-3">
                <span class="text-lg">📖</span>
                <span>Glosario del Ahorro</span>
              </span>
              <span class="text-slate-500">→</span>
            </a>
          </div>

          <!-- Latest Posts -->
          <div class="w-full mb-10">
            <h2 class="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400/60 mb-4 text-center">Últimas Guías</h2>
            <div class="space-y-3">
              @for (post of latestPosts; track post.id) {
                <a [routerLink]="['/blog', post.slug]" 
                   class="group flex items-center gap-4 w-full bg-white/[0.03] border border-white/5 rounded-2xl p-3 hover:bg-white/[0.08] hover:border-cyan-500/20 transition-all">
                  <img [src]="post.image" [alt]="post.title" 
                       class="w-16 h-16 rounded-xl object-cover shadow-md flex-shrink-0">
                  <div class="flex-1 min-w-0">
                    <span class="text-[9px] font-black uppercase text-slate-500 group-hover:text-cyan-400 transition-colors">{{ post.category }}</span>
                    <h3 class="text-xs font-bold leading-snug line-clamp-2 mt-0.5">{{ post.title }}</h3>
                  </div>
                  <span class="text-slate-600 text-xs flex-shrink-0">→</span>
                </a>
              }
            </div>
          </div>

          <!-- Footer -->
          <footer class="text-center pt-8 border-t border-white/5 w-full">
            <p class="text-[10px] text-slate-600 font-bold uppercase tracking-widest">© 2026 Multi Markt Elche</p>
            <div class="mt-3 flex gap-2 justify-center">
              <span class="w-1 h-1 rounded-full bg-cyan-400/60"></span>
              <span class="w-1 h-1 rounded-full bg-blue-500/60"></span>
              <span class="w-1 h-1 rounded-full bg-indigo-500/60"></span>
            </div>
          </footer>

        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class SocialHubComponent implements OnInit {
  private blogService = inject(BlogService);
  private seoService = inject(SeoService);
  private platformId = inject(PLATFORM_ID);
  
  latestPosts: BlogPost[] = [];

  ngOnInit() {
    this.latestPosts = this.blogService.getLatestPosts(3);
    
    this.seoService.updateTags({
      title: 'Multi Markt Social Hub: Ahorro en Elche',
      description: 'Todos nuestros enlaces útiles en un solo lugar. WhatsApp, Redes Sociales y las mejores guías de ahorro en Elche.',
      url: 'https://multimarkt.ovny.net/links',
      type: 'website'
    });
  }

  openWhatsapp(text: string) {
    if (isPlatformBrowser(this.platformId)) {
      const url = `https://wa.me/34621660580?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    }
  }
}
