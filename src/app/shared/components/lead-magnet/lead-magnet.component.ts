import { Component, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WhatsappService } from '../../../core/services/whatsapp.service';

@Component({
  selector: 'app-lead-magnet',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="relative py-24 overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0 bg-slate-900">
         <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20"></div>
         <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
         <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          
          <!-- Content -->
          <div class="text-white">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
               <span class="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
               Oferta Exclusiva Elche
            </div>
            <h2 class="text-4xl font-black sm:text-6xl tracking-tighter uppercase leading-tight mb-8">
              ¿Pagas más de <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">40€ al mes?</span>
            </h2>
            <p class="text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
              Más del 80% de nuestros clientes estaban pagando por servicios que no usaban. Completa tus datos y analizamos tu ahorro por WhatsApp al instante.
            </p>
            
            <div class="grid grid-cols-2 gap-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">✓</div>
                <span class="font-medium text-slate-200 text-sm">Sin permanencia</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">✓</div>
                <span class="font-medium text-slate-200 text-sm">Cambio en 48h</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">✓</div>
                <span class="font-medium text-slate-200 text-sm">Misma red premium</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">✓</div>
                <span class="font-medium text-slate-200 text-sm">Atención en Elche</span>
              </div>
            </div>
          </div>

          <!-- Quick Form -->
          <div class="bg-white/90 backdrop-blur-xl rounded-4xl p-10 md:p-14 shadow-2xl shadow-blue-900/10 border border-white/50 relative overflow-hidden max-w-xl mx-auto lg:mx-0 w-full">
            <div class="relative z-10">
              <div class="mb-10">
                <h3 class="text-3xl font-black text-slate-900 mb-3 uppercase tracking-tighter">Ver mi ahorro personalizado</h3>
                <p class="text-slate-500 font-medium">Análisis gratuito enviado a tu WhatsApp al instante.</p>
              </div>

              <form [formGroup]="leadForm" (ngSubmit)="onSubmit()" class="space-y-6">
                <!-- Name Field -->
                <div class="space-y-2">
                  <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Tu Nombre</label>
                  <div class="relative">
                    <input 
                      type="text" 
                      formControlName="name" 
                      placeholder="Ej: Juan García"
                      class="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all text-slate-900 font-semibold placeholder:text-slate-300 shadow-sm"
                    >
                    <span class="absolute right-6 top-1/2 -translate-y-1/2 text-xl opacity-20">👤</span>
                  </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Operator Field -->
                  <div class="space-y-2">
                    <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Operador Actual</label>
                    <div class="relative">
                      <select 
                        formControlName="currentOperator"
                        class="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all text-slate-900 font-semibold cursor-pointer shadow-sm appearance-none"
                      >
                        <option value="">Selecciona...</option>
                        <option value="Movistar">Movistar</option>
                        <option value="Vodafone">Vodafone</option>
                        <option value="Orange">Orange</option>
                        <option value="Digi">Digi</option>
                        <option value="Lowi">Lowi</option>
                        <option value="Otros">Otros</option>
                      </select>
                      <span class="absolute right-6 top-1/2 -translate-y-1/2 text-xs text-slate-400 opacity-50 pointer-events-none">▼</span>
                    </div>
                  </div>

                  <!-- Service Field -->
                  <div class="space-y-2">
                    <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Servicios</label>
                    <div class="relative">
                      <select 
                        formControlName="service"
                        class="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all text-slate-900 font-semibold cursor-pointer shadow-sm appearance-none"
                      >
                        <option value="">Selecciona...</option>
                        <option value="Fibra+Móvil">Fibra + Móvil</option>
                        <option value="Solo Fibra">Solo Fibra</option>
                        <option value="Multi-línea">Varias líneas</option>
                        <option value="Energía">Luz / Gas</option>
                      </select>
                      <span class="absolute right-6 top-1/2 -translate-y-1/2 text-xs text-slate-400 opacity-50 pointer-events-none">▼</span>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  [disabled]="leadForm.invalid"
                  class="w-full py-5 bg-[#25D366] text-white font-black rounded-2xl hover:bg-[#20ba5a] transition-all shadow-xl shadow-green-500/20 uppercase tracking-widest text-sm flex items-center justify-center gap-4 disabled:bg-slate-100 disabled:text-slate-400 disabled:shadow-none disabled:cursor-not-allowed group"
                >
                  <svg class="w-6 h-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Analizar mis facturas
                </button>
              </form>
              
              <div class="mt-8 flex items-center justify-center gap-4 text-slate-400">
                <span class="w-8 h-px bg-slate-100"></span>
                <span class="text-[10px] font-black uppercase tracking-widest">Respuesta en < 5 min</span>
                <span class="w-8 h-px bg-slate-100"></span>
              </div>
            </div>

            <!-- Absolute decorative bits -->
            <div class="absolute -top-12 -left-12 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl opacity-50"></div>
            <div class="absolute -bottom-12 -right-12 w-32 h-32 bg-green-500/10 rounded-full blur-3xl opacity-50"></div>
          </div>

        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class LeadMagnetComponent {
  private fb = inject(FormBuilder);
  private whatsappService = inject(WhatsappService);
  private platformId = inject(PLATFORM_ID);

  leadForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    currentOperator: ['', Validators.required],
    service: ['', Validators.required]
  });

  onSubmit() {
    if (this.leadForm.valid) {
      if (isPlatformBrowser(this.platformId)) {
        this.whatsappService.openWhatsappWithLead(this.leadForm.value);
      }
    }
  }
}
