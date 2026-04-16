import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-services-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-services-grid.component.html',
  styleUrl: './home-services-grid.component.scss'
})
export class HomeServicesGridComponent {
  @Output() whatsapp = new EventEmitter<string>();

  onWhatsappClick(text: string): void {
    this.whatsapp.emit(text);
  }
}
