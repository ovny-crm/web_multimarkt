import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../home.component';

@Component({
  selector: 'app-home-services-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-services-list.component.html',
  styleUrl: './home-services-list.component.scss'
})
export class HomeServicesListComponent {
  @Input() services: Service[] = [];
  @Output() openModal = new EventEmitter<string>();

  onServiceClick(serviceName: string): void {
    this.openModal.emit(serviceName);
  }
}
