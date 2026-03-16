import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WhatsappService, LeadData } from '../../../core/services/whatsapp.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lead-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <form 
      [formGroup]="leadForm" 
      (ngSubmit)="onSubmit()" 
      class="space-y-4"
    >
      <!-- Operador Actual -->
      <div>
        <label for="currentOperator" class="block text-sm font-medium text-slate-700 mb-1.5 text-center">
          ¿Con qué operador estás actualmente? *
        </label>
        <select
          id="currentOperator"
          formControlName="currentOperator"
          class="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all bg-slate-50 focus:bg-white cursor-pointer text-lg font-medium text-slate-800"
          [class.border-red-400]="leadForm.get('currentOperator')?.invalid && leadForm.get('currentOperator')?.touched"
        >
          <option value="">Selecciona tu operador</option>
          @for (operator of operators; track operator) {
            <option [value]="operator">{{ operator }}</option>
          }
        </select>
        @if (leadForm.get('currentOperator')?.invalid && leadForm.get('currentOperator')?.touched) {
          <span class="text-red-500 text-xs mt-1 block text-center">Por favor, selecciona tu operador</span>
        }
      </div>
      
      <!-- Servicio de interés (opcional) -->
      @if (showServiceSelector) {
        <div>
          <label for="service" class="block text-sm font-medium text-slate-700 mb-1.5 text-center">
            ¿Qué servicio quieres mejorar?
          </label>
          <select
            id="service"
            formControlName="service"
            class="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all bg-slate-50 focus:bg-white cursor-pointer text-lg font-medium text-slate-800"
          >
            <option value="">Todos los servicios</option>
            @for (service of services; track service) {
              <option [value]="service">{{ service }}</option>
            }
          </select>
        </div>
      }
      
      <!-- Submit Button -->
      <button
        type="submit"
        [disabled]="leadForm.invalid"
        class="w-full py-4 px-6 bg-[#25D366] text-white font-bold uppercase tracking-wide rounded-2xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-3 text-lg"
      >
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {{ buttonText }}
      </button>
      
      <!-- Nota -->
      <p class="text-center text-xs text-slate-500 pt-2 font-medium">
        ⚡ Respuesta inmediata por WhatsApp
      </p>
    </form>
  `,
  styles: []
})
export class LeadFormComponent {
  private fb = inject(FormBuilder);
  private whatsappService = inject(WhatsappService);

  // Inputs configurables
  @Input() showServiceSelector = true;
  @Input() buttonText = 'Ver mi ahorro →';
  @Input() preselectedOperator = '';
  @Input() preselectedService = '';

  // Output para tracking
  @Output() formSubmitted = new EventEmitter<LeadData>();

  // Operadores disponibles (operador actual del cliente)
  operators = [
    'Movistar',
    'Vodafone',
    'Orange',
    'Yoigo',
    'MásMóvil',
    'O2',
    'Lowi',
    'Digi',
    'Pepephone',
    'Avatel',
    'Redi',
    'Aproop!',
    'Otro'
  ];

  // Servicios de telecomunicaciones
  services = [
    'Fibra + Móvil',
    'Solo Fibra',
    'Solo Móvil',
    'Pack Fútbol',
    'Televisión',
    'Energía',
    'Todo incluido'
  ];

  leadForm: FormGroup = this.fb.group({
    currentOperator: ['', Validators.required],
    service: ['']
  });

  ngOnInit(): void {
    if (this.preselectedOperator) {
      this.leadForm.patchValue({ currentOperator: this.preselectedOperator });
    }
    if (this.preselectedService) {
      this.leadForm.patchValue({ service: this.preselectedService });
    }
  }

  onSubmit(): void {
    if (this.leadForm.valid) {
      const leadData: LeadData = this.leadForm.value;

      // Emitir evento para tracking/analytics
      this.formSubmitted.emit(leadData);

      // Redirigir a WhatsApp (NO thank you page!)
      this.whatsappService.openWhatsappWithLead(leadData);
    } else {
      // Marcar todos los campos como touched para mostrar errores
      Object.keys(this.leadForm.controls).forEach(key => {
        this.leadForm.get(key)?.markAsTouched();
      });
    }
  }
}
