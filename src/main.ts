import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { Routes} from '@angular/router';
import { ProjetComponent } from './app/projet/projet.component';
import { ObjetComponent } from './app/objet/objet.component';
const routes: Routes = [
  { path: 'projet', component: ProjetComponent },
  { path: 'objet', component: ObjetComponent }
];

bootstrapApplication(AppComponent, appConfig  )
  .catch((err) => console.error(err))
