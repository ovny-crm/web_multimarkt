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
          <div class="flex flex-wrap gap-2">
            @for (tag of post.tags; track tag) {
              <span class="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                #{{ tag }}
              </span>
            }
          </div>
        </footer>
      </article>
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

  openWhatsapp(text: string) {
    if (isPlatformBrowser(this.platformId)) {
      const url = `https://wa.me/34621660580?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
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
          type: 'article',
          keywords: this.post.tags.join(', ')
        });
      }
    });
  }
}
