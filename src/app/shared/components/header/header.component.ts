import { Component, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
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
