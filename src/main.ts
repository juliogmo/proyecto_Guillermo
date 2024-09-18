import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Asegúrate de que el archivo esté correctamente referenciado
import { AppComponent } from './app/app.component'; // Importa tu componente principal

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));