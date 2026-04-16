import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadFormComponent } from '../../../../shared/components/lead-form/lead-form.component';

@Component({
  selector: 'app-home-contact-modal',
  standalone: true,
  imports: [CommonModule, LeadFormComponent],
  templateUrl: './home-contact-modal.component.html',
  styleUrl: './home-contact-modal.component.scss'
})
export class HomeContactModalComponent {
  @Input() isVisible = false;
  @Input() selectedService = '';
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<any>();

  closeModal(): void {
    this.close.emit();
  }

  onLeadSubmitted(lead: any): void {
    this.submit.emit(lead);
  }
}
