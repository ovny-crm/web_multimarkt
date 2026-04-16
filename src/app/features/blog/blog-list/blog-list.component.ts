import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService, BlogPost } from '../../../core/services/blog.service';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent implements OnInit {
  private blogService = inject(BlogService);
  private seoService = inject(SeoService);
  posts: BlogPost[] = [];

  ngOnInit() {
    this.posts = this.blogService.getPosts();
    this.seoService.updateTags({
      title: 'Blog de Ahorro y Tecnología: Guías para Pagar Menos',
      description: 'Consejos expertos, comparativas de tarifas y guías de tecnología para ahorrar en tus facturas de Fibra, Móvil y Energía.',
      keywords: 'blog ahorro, comparativa fibra, facturas luz, tecnología, elche'
    });

    this.seoService.setBreadcrumbs([
      { name: 'Inicio', url: '/' },
      { name: 'Blog', url: '/blog' }
    ]);
  }
}
