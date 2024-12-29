import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ObjetComponent } from './objet/objet.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjetComponent } from './projet/projet.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
     // Add components here as you create them
  ],
  imports: [ AppComponent,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    // Add routes to your Angular app
    BrowserModule ,
    ProjetComponent,
    CommonModule,
    MatSlideToggleModule,
    ObjetComponent,
    NgModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
     // Add routes to your Angular app
    // Add other Angular modules here
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
