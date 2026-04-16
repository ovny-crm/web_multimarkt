import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadFormComponent } from '../../../../shared/components/lead-form/lead-form.component';

@Component({
  selector: 'app-home-cta-calculate',
  standalone: true,
  imports: [CommonModule, LeadFormComponent],
  templateUrl: './home-cta-calculate.component.html',
  styleUrl: './home-cta-calculate.component.scss'
})
export class HomeCtaCalculateComponent {
  @Output() leadSubmit = new EventEmitter<any>();

  onLeadSubmitted(lead: any): void {
    this.leadSubmit.emit(lead);
  }
}
