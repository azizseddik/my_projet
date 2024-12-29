import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ObjetComponent } from './objet/objet.component';
import { AppModule } from './app.module';
import { ProjetComponent } from './projet/projet.component';
export const routes: Routes = [ 
    { path: 'objet', component: ObjetComponent},
    {  path:'projet', component: ProjetComponent,},
    {path: '**',component:ObjetComponent},
    { path: 'home', component: ObjetComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'services', component: ServicesComponent },
//   { path: 'contact', component: ContactComponent },
    
    // Add more routes here for your components
];
