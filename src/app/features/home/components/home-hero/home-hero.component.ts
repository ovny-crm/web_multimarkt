import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadFormComponent } from '../../../../shared/components/lead-form/lead-form.component';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [CommonModule, LeadFormComponent],
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.scss'
})
export class HomeHeroComponent {
  @Output() whatsapp = new EventEmitter<string>();
  @Output() leadSubmit = new EventEmitter<any>();

  openWhatsapp(text: string): void {
    this.whatsapp.emit(text);
  }

  onLeadSubmitted(lead: any): void {
    this.leadSubmit.emit(lead);
  }
}
