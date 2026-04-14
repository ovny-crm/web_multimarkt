import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService, BlogPost } from '../../../core/services/blog.service';
import { SeoService } from '../../../core/services/seo.service';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterLink, SafeHtmlPipe],
  template: `
    @if (post) {
      <article class="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <header class="mb-12">
          <div class="flex items-center space-x-2 text-sm text-blue-600 font-medium mb-4">
            <a routerLink="/blog" class="hover:underline">Blog</a>
            <span>/</span>
            <span>{{ post.category }}</span>
          </div>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6 uppercase tracking-tighter">
            {{ post.title }}
          </h1>
          <div class="flex items-center space-x-4 text-gray-500">
            <span class="font-medium text-gray-900">{{ post.author }}</span>
            <span>•</span>
            <time [attr.datetime]="post.date">{{ post.date | date:'longDate' }}</time>
          </div>
        </header>

        <img [src]="post.image" class="w-full h-[400px] object-cover rounded-3xl shadow-xl mb-12 border-b-4 border-cyan-400" [alt]="post.title">

        <div class="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed mb-16" [innerHTML]="post.content | safeHtml">
        </div>

        <!-- WhatsApp CTA Section -->
        <div class="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-colors group-hover:bg-cyan-500/20"></div>
          
          <div class="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div class="flex-1 text-center md:text-left">
              <h3 class="text-2xl sm:text-3xl font-bold text-white mb-4 uppercase">
                ¿Quieres ahorrar como explicamos aquí?
              </h3>
              <p class="text-slate-300 text-lg mb-6 leading-relaxed">
                Nuestros asesores en Elche analizan tu caso gratis por WhatsApp. ¡Sin esperas ni compromisos!
              </p>
              <button (click)="openWhatsapp('Hola! He leído el artículo sobre ' + post.title + ' y me gustaría ahorrar en mi factura.')"
                class="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-full hover:bg-green-600 transition-all hover:scale-105 shadow-xl shadow-green-500/20 uppercase tracking-wide">
                <span class="text-xl">💬</span>
                Consultar por WhatsApp Gratis
              </button>
            </div>
            <div class="hidden md:block w-32 h-32 bg-white/5 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 rotate-3 group-hover:rotate-0 transition-transform">
               <span class="text-5xl">💶</span>
            </div>
          </div>
        </div>

        <footer class="mt-16 pt-8 border-t border-gray-200">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div class="flex flex-wrap gap-2">
              @for (tag of post.tags; track tag) {
                <span class="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                  #{{ tag }}
                </span>
              }
            </div>
            
            <!-- Share Bar -->
            <div class="flex items-center gap-3">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-widest">Compartir:</span>
              <button (click)="shareOnWhatsapp()" 
                class="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all shadow-sm"
                title="Compartir en WhatsApp">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </button>
              <button (click)="copyLink()" 
                class="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition-all shadow-sm relative"
                title="Copiar enlace">
                <span class="text-lg">🔗</span>
                @if (showCopyFeedback) {
                  <span class="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded-md animate-bounce">¡Copiado!</span>
                }
              </button>
            </div>
          </div>
        </footer>
60: 
61:         <!-- Related Posts Section -->
62:         @if (relatedPosts.length > 0) {
63:           <section class="mt-20 pt-16 border-t border-gray-100">
64:             <h2 class="text-3xl font-black text-gray-900 mb-10 uppercase tracking-tight">Sigue leyendo</h2>
65:             <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
66:               @for (rPost of relatedPosts; track rPost.id) {
67:                 <a [routerLink]="['/blog', rPost.slug]" class="group flex flex-col gap-4">
68:                   <img [src]="rPost.image" [alt]="rPost.title" class="w-full h-48 object-cover rounded-2xl shadow-md group-hover:shadow-xl transition-all group-hover:-translate-y-1">
69:                   <div>
70:                     <span class="text-xs font-bold text-blue-600 uppercase">{{ rPost.category }}</span>
71:                     <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mt-1">{{ rPost.title }}</h3>
72:                   </div>
73:                 </a>
74:               }
75:             </div>
76:           </section>
77:         }
78:       </article>
    } @else {
      <div class="text-center py-20">
        <h2 class="text-2xl font-bold text-gray-900">Post no encontrado</h2>
        <a routerLink="/blog" class="text-blue-600 hover:underline mt-4 inline-block font-bold">Volver al blog</a>
      </div>
    }
  `,
  styles: [`
    :host { display: block; }
    .prose {
      color: #334155;
      font-size: 1.125rem;
      line-height: 1.8;
    }
    .prose h2 { 
      margin-top: 3rem; 
      margin-bottom: 1.5rem; 
      font-size: 2rem; 
      font-weight: 900; 
      color: #0f172a; 
      text-transform: uppercase; 
      letter-spacing: -0.05em;
      line-height: 1.1;
      border-left: 4px solid #06b6d4;
      padding-left: 1.5rem;
    }
    .prose h3 {
      margin-top: 2rem;
      font-size: 1.5rem;
      font-weight: 800;
      color: #1e293b;
    }
    .prose p { 
      margin-bottom: 1.75rem; 
    }
    .prose strong {
      color: #0f172a;
      font-weight: 700;
      background: linear-gradient(120deg, rgba(34, 211, 238, 0.1) 0%, rgba(34, 211, 238, 0.1) 100%);
      padding: 0 4px;
      border-radius: 4px;
    }
    .prose ul {
      list-style-type: none;
      padding-left: 0;
      margin-bottom: 2rem;
    }
    .prose li {
      position: relative;
      padding-left: 2rem;
      margin-bottom: 0.75rem;
    }
    .prose li::before {
      content: '→';
      position: absolute;
      left: 0;
      color: #06b6d4;
      font-weight: bold;
    }
    .prose blockquote {
      border-left: 4px solid #e2e8f0;
      padding-left: 1.5rem;
      font-style: italic;
      color: #64748b;
      margin: 2.5rem 0;
    }
  `]
})
export class BlogPostComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  private seoService = inject(SeoService);
  private platformId = inject(PLATFORM_ID);
  post: BlogPost | undefined;
  relatedPosts: BlogPost[] = [];

  showCopyFeedback = false;

  openWhatsapp(text: string) {
    if (isPlatformBrowser(this.platformId)) {
      const url = `https://wa.me/34621660580?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    }
  }

  shareOnWhatsapp() {
    if (isPlatformBrowser(this.platformId) && this.post) {
      const text = `Mira este artículo: ${this.post.title} - https://multimarkt.ovny.net/blog/${this.post.slug}`;
      const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    }
  }

  copyLink() {
    if (isPlatformBrowser(this.platformId) && this.post) {
      const url = `https://multimarkt.ovny.net/blog/${this.post.slug}`;
      navigator.clipboard.writeText(url).then(() => {
        this.showCopyFeedback = true;
        setTimeout(() => this.showCopyFeedback = false, 2000);
      });
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.post = this.blogService.getPostBySlug(slug);
      
      if (this.post) {
        this.seoService.updateTags({
          title: this.post.title,
          description: this.post.excerpt,
          image: this.post.image,
          url: `https://multimarkt.ovny.net/blog/${this.post.slug}`,
          type: 'article',
          keywords: this.post.tags.join(', ')
        });

        this.seoService.setBreadcrumbs([
          { name: 'Inicio', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: this.post.title, url: `/blog/${this.post.slug}` }
        ]);

        this.seoService.setStructuredData({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": this.post.title,
          "image": [this.post.image],
          "datePublished": this.post.date,
          "author": [{
            "@type": "Person",
            "name": this.post.author,
            "url": "https://multimarkt.ovny.net/blog"
          }],
          "description": this.post.excerpt
        }, 'blog-post-schema');

        this.relatedPosts = this.blogService.getRelatedPosts(this.post);
      }
    });
  }
}
