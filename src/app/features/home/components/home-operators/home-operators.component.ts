import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Operator } from '../../home.component';

@Component({
  selector: 'app-home-operators',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-operators.component.html',
  styleUrl: './home-operators.component.scss'
})
export class HomeOperatorsComponent {
  @Input() operators: Operator[] = [];
}
