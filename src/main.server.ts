import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

/**
 * En Angular 21, bootstrapApplication acepta un tercer argumento opcional BootstrapContext.
 * El motor de SSR pasa este contexto a la función bootstrap exportada.
 */
const bootstrap = (context: BootstrapContext) => bootstrapApplication(AppComponent, config, context);

export default bootstrap;