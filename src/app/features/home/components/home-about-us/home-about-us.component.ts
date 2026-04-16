import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-about-us.component.html',
  styleUrl: './home-about-us.component.scss'
})
export class HomeAboutUsComponent {
  @Output() whatsapp = new EventEmitter<string>();

  onWhatsappClick(text: string): void {
    this.whatsapp.emit(text);
  }
}
