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
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
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
