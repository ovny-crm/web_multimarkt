import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../../core/services/whatsapp.service';

@Component({
  selector: 'app-sticky-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sticky-whatsapp-button.component.html',
  styleUrl: './sticky-whatsapp-button.component.scss'
})
export class StickyWhatsappButtonComponent {
  private whatsappService = inject(WhatsappService);

  openWhatsapp(message?: string): void {
    this.whatsappService.openWhatsapp(message);
  }
}
