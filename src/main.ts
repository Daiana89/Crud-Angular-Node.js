import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';  // Importa provideHttpClient y withFetch
import { appConfig } from './app/app.config';  // Tu configuración personalizada
import { AppComponent } from './app/app.component';

// Iniciar la aplicación con la configuración y habilitar fetch para HttpClient
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch())  // Configura HttpClient para usar fetch
    // Agrega más configuraciones si es necesario
    , ...appConfig.providers
  ]
})
  .catch((err) => console.error(err));
