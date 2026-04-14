import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
  { path: 'blog', loadComponent: () => import('./features/blog/blog-list/blog-list.component').then(m => m.BlogListComponent) },
  { path: 'blog/:slug', loadComponent: () => import('./features/blog/blog-post/blog-post.component').then(m => m.BlogPostComponent) },
  { path: 'comparativa-digi', loadComponent: () => import('./features/comparison/comparison.component').then(m => m.ComparisonComponent) },
  { path: 'glosario', loadComponent: () => import('./features/glossary/glossary.component').then(m => m.GlossaryComponent) },
  { path: 'politica-privacidad', loadComponent: () => import('./features/legal/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent) },
  { path: 'aviso-legal', loadComponent: () => import('./features/legal/legal-notice/legal-notice.component').then(m => m.LegalNoticeComponent) },
  { path: 'cookies', loadComponent: () => import('./features/legal/cookies-policy/cookies-policy.component').then(m => m.CookiesPolicyComponent) },
  { path: 'links', loadComponent: () => import('./features/social-hub/social-hub.component').then(m => m.SocialHubComponent) },
  { path: '**', redirectTo: '' }
];
