import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SocialProofComponent } from './shared/components/social-proof/social-proof.component';
import { StickyWhatsappButtonComponent } from './shared/components/sticky-whatsapp-button/sticky-whatsapp-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, StickyWhatsappButtonComponent, SocialProofComponent],
  template: `
    <app-header />
    <main class="app-main-wrapper">
      <router-outlet />
    </main>
    <app-footer />
    <app-sticky-whatsapp-button />
    <app-social-proof />
  `,
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'Multi Markt - Comparador de Telecomunicaciones';
}
