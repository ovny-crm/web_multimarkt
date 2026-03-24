import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { StickyWhatsappButtonComponent } from './shared/components/sticky-whatsapp-button/sticky-whatsapp-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, StickyWhatsappButtonComponent],
  template: `
    <app-header></app-header>
    <main class="min-h-screen pt-16">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
    <app-sticky-whatsapp-button />
  `,
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Multi Markt - Comparador de Telecomunicaciones';
}
