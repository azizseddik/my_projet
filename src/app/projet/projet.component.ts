import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import{CommonModule}from '@angular/common';
import {ChangeDetectionStrategy, } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';
import {MatButton} from '@angular/material/button';
interface images{  imagesrc : string;
  imagealt: string;} 
@Component({
  selector: 'app-projet',
  standalone: true,
  imports: [MatTooltip, MatButton,RouterModule,CommonModule,MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.css'
})
export class ProjetComponent {  constructor() {}
  
       url1='https://www.mediavision.tn/3892-large_default/pack-spirit-of-gamer-pro-mkh5-clavier-casque-souris-et-tapis-tunisie.jpg';
       url2='https://image.smythstoys.com/zoom/242947.jpg';
       url3='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-4_mI6kHy8zM20U-GR2GCH5d7PVes_HXQVClVHEtldrE-Lf7k6vpPKjvYeUzGro9qFI0&usqp=CAU';
       url4='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2ya_HyXrFzfNai4IE48YyMXjLsXs3fDA2Q&s';
       url5='https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/p/c/pc-portable-hp-15-fd0097nk-i5-13e-gen-32g-512go-ssd-noir.jpg';



}
