import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObjetComponent } from './objet/objet.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterOutlet , ObjetComponent,MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-projet'; 
}
