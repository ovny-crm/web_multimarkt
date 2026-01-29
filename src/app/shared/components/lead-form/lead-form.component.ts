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
      <!-- Nombre -->
      <div>
        <label for="name" class="block text-sm font-medium text-slate-700 mb-1.5">
          Tu nombre *
        </label>
        <input
          type="text"
          id="name"
          formControlName="name"
          placeholder="¿Cómo te llamas?"
          class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all bg-slate-50 focus:bg-white"
          [class.border-red-400]="leadForm.get('name')?.invalid && leadForm.get('name')?.touched"
        />
        @if (leadForm.get('name')?.invalid && leadForm.get('name')?.touched) {
          <span class="text-red-500 text-xs mt-1">El nombre es requerido</span>
        }
      </div>
      
      <!-- Teléfono -->
      <div>
        <label for="phone" class="block text-sm font-medium text-slate-700 mb-1.5">
          Tu teléfono *
        </label>
        <input
          type="tel"
          id="phone"
          formControlName="phone"
          placeholder="600 123 456"
          class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all bg-slate-50 focus:bg-white"
          [class.border-red-400]="leadForm.get('phone')?.invalid && leadForm.get('phone')?.touched"
        />
        @if (leadForm.get('phone')?.invalid && leadForm.get('phone')?.touched) {
          <span class="text-red-500 text-xs mt-1">Introduce un teléfono válido</span>
        }
      </div>
      
      <!-- Operador Actual -->
      <div>
        <label for="currentOperator" class="block text-sm font-medium text-slate-700 mb-1.5">
          ¿Con qué operador estás? *
        </label>
        <select
          id="currentOperator"
          formControlName="currentOperator"
          class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all bg-slate-50 focus:bg-white cursor-pointer"
          [class.border-red-400]="leadForm.get('currentOperator')?.invalid && leadForm.get('currentOperator')?.touched"
        >
          <option value="">Selecciona tu operador</option>
          @for (operator of operators; track operator) {
            <option [value]="operator">{{ operator }}</option>
          }
        </select>
        @if (leadForm.get('currentOperator')?.invalid && leadForm.get('currentOperator')?.touched) {
          <span class="text-red-500 text-xs mt-1">Selecciona tu operador</span>
        }
      </div>
      
      <!-- Servicio de interés (opcional) -->
      @if (showServiceSelector) {
        <div>
          <label for="service" class="block text-sm font-medium text-slate-700 mb-1.5">
            ¿Qué servicio te interesa?
          </label>
          <select
            id="service"
            formControlName="service"
            class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all bg-slate-50 focus:bg-white cursor-pointer"
          >
            <option value="">Todos los servicios</option>
            @for (service of services; track service) {
              <option [value]="service">{{ service }}</option>
            }
          </select>
        </div>
      }
      
      <!-- Submit Button -->
      <!-- ACTUALIZADO: Corporate Blue/Cyan Gradient, Shadow Blue -->
      <button
        type="submit"
        [disabled]="leadForm.invalid"
        class="w-full py-3.5 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold uppercase tracking-wide rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
      >
        {{ buttonText }}
      </button>
      
      <!-- Nota -->
      <p class="text-center text-xs text-slate-500 pt-2">
        🔒 Sin compromiso · Respuesta inmediata · 
        <a href="/politica-privacidad" class="text-cyan-600 hover:underline cursor-pointer">Política de privacidad</a>
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
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{9,}$/)]],
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
