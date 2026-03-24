import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
          <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            {{ post.title }}
          </h1>
          <div class="flex items-center space-x-4 text-gray-500">
            <span class="font-medium text-gray-900">{{ post.author }}</span>
            <span>•</span>
            <time [attr.datetime]="post.date">{{ post.date | date:'longDate' }}</time>
          </div>
        </header>

        <img [src]="post.image" class="w-full h-[400px] object-cover rounded-3xl shadow-xl mb-12" [alt]="post.title">

        <div class="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed" [innerHTML]="post.content | safeHtml">
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
        <a routerLink="/blog" class="text-blue-600 hover:underline mt-4 inline-block">Volver al blog</a>
      </div>
    }
  `,
  styles: [`
    :host { display: block; }
    .prose h2 { margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem; font-weight: 700; color: #111827; }
    .prose p { margin-bottom: 1.5rem; }
  `]
})
export class BlogPostComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  private seoService = inject(SeoService);
  post: BlogPost | undefined;

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
