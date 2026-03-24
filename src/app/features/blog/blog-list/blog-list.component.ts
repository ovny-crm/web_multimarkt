import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService, BlogPost } from '../../../core/services/blog.service';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header class="text-center mb-16">
        <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Blog de Ahorro y Tecnología
        </h1>
        <p class="mt-4 text-xl text-gray-500">
          Consejos, guías y comparativas para que nunca pagues de más.
        </p>
      </header>

      <div class="grid gap-12 lg:grid-cols-2 xl:grid-cols-3">
        @for (post of posts; track post.id) {
          <article class="flex flex-col overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div class="flex-shrink-0">
              <img [src]="post.image" class="h-48 w-full object-cover" [alt]="post.title">
            </div>
            <div class="flex flex-1 flex-col justify-between bg-white p-6">
              <div class="flex-1">
                <p class="text-sm font-medium text-blue-600">
                  <span class="hover:underline">{{ post.category }}</span>
                </p>
                <a [routerLink]="['/blog', post.slug]" class="mt-2 block">
                  <h3 class="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    {{ post.title }}
                  </h3>
                  <p class="mt-3 text-base text-gray-500 line-clamp-3">
                    {{ post.excerpt }}
                  </p>
                </a>
              </div>
              <div class="mt-6 flex items-center">
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">
                    {{ post.author }}
                  </p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <time [attr.datetime]="post.date">{{ post.date | date:'longDate' }}</time>
                  </div>
                </div>
              </div>
            </div>
          </article>
        }
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class BlogListComponent implements OnInit {
  private blogService = inject(BlogService);
  private seoService = inject(SeoService);
  posts: BlogPost[] = [];

  ngOnInit() {
    this.posts = this.blogService.getPosts();
    this.seoService.updateTags({
      title: 'Blog de Ahorro y Tecnología: Guías y Comparativas',
      description: 'Aprende a ahorrar en tus facturas con nuestras guías expertas.',
      keywords: 'blog ahorro, comparativa fibra, facturas luz, tecnología'
    });
  }
}
