import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-slate-950 text-white pt-20 pb-10 relative overflow-hidden">
        <!-- Background Decoration -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
                <!-- Brand Column -->
                <div class="space-y-6">
                    <div class="flex items-center gap-3">
                        <img src="assets/images/logo-planeta-multi-markt.png" alt="Multi Markt Logo"
                            class="w-12 h-12 object-contain drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                        <span class="text-2xl font-bold tracking-tighter uppercase">Multi <span class="text-cyan-400">Markt</span></span>
                    </div>
                    <p class="text-slate-400 text-sm leading-relaxed max-w-xs">
                        Tu consultoría tecnológica de confianza en Elche. Transformamos tus facturas en ahorro real con asesoramiento humano y experto.
                    </p>
                    <!-- Social Links -->
                    <div class="flex items-center gap-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all group">
                            <span class="text-xs font-bold transform group-hover:scale-110 transition-transform">IG</span>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all group">
                            <span class="text-xs font-bold transform group-hover:scale-110 transition-transform">FB</span>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all group">
                            <span class="text-xs font-bold transform group-hover:scale-110 transition-transform">TK</span>
                        </a>
                    </div>
                </div>

                <!-- Navigation -->
                <div>
                    <h4 class="text-lg font-bold mb-8 relative inline-block">
                        Explorar
                        <span class="absolute bottom-0 left-0 w-1/2 h-0.5 bg-cyan-400"></span>
                    </h4>
                    <ul class="space-y-4">
                        <li><a routerLink="/" class="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            Inicio
                        </a></li>
                        <li><a routerLink="/blog" class="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group font-bold text-white">
                            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            Blog de Ahorro
                        </a></li>
                        <li><a routerLink="/comparativa-digi" class="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            Comparativas
                        </a></li>
                        <li><a routerLink="/glosario" class="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            Glosario Técnico
                        </a></li>
                    </ul>
                </div>

                <!-- Legal -->
                <div>
                    <h4 class="text-lg font-bold mb-8 relative inline-block">
                        Legal
                        <span class="absolute bottom-0 left-0 w-1/2 h-0.5 bg-cyan-400"></span>
                    </h4>
                    <ul class="space-y-4">
                        <li><a routerLink="/politica-privacidad" class="text-slate-400 hover:text-white transition-colors">Política de Privacidad</a></li>
                        <li><a routerLink="/aviso-legal" class="text-slate-400 hover:text-white transition-colors">Aviso Legal</a></li>
                        <li><a routerLink="/cookies" class="text-slate-400 hover:text-white transition-colors">Política de Cookies</a></li>
                    </ul>
                </div>

                <!-- Contact & Location -->
                <div>
                    <h4 class="text-lg font-bold mb-8 relative inline-block">
                        ¿Dónde estamos?
                        <span class="absolute bottom-0 left-0 w-1/2 h-0.5 bg-cyan-400"></span>
                    </h4>
                    <div class="space-y-4">
                        <div class="flex items-start gap-3">
                            <span class="text-cyan-400">📍</span>
                            <div class="text-sm text-slate-400">
                                <p class="text-white font-medium">Tienda Física Elche</p>
                                <p>C/ Josep Bernad Amorós, 108</p>
                                <p>03205 Elche, Alicante</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="text-cyan-400">📞</span>
                            <a href="tel:+34621660580" class="text-sm text-white font-bold hover:text-cyan-400 transition-colors">621 66 05 80</a>
                        </div>
                        <div class="mt-6 pt-6 border-t border-white/5">
                            <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#25D366]/10 text-[#25D366] rounded-full text-xs font-bold">
                                <span class="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></span>
                                Online por WhatsApp
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                <p class="text-slate-500 text-xs">
                    © {{ currentYear }} Multi Markt. Diseñado para el ahorro real.
                </p>
                <div class="flex items-center gap-8">
                   <div class="flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                       <span>Fibra</span>
                       <span class="w-1 h-1 bg-slate-700 rounded-full"></span>
                       <span>Móvil</span>
                       <span class="w-1 h-1 bg-slate-700 rounded-full"></span>
                       <span>Energía</span>
                   </div>
                </div>
            </div>
        </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
