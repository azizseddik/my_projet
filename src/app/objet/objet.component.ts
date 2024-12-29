import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ProjetComponent } from '../projet/projet.component';
import { RouterModule } from '@angular/router';
import{CommonModule}from '@angular/common';
import {ChangeDetectionStrategy, } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';
import {MatButton} from '@angular/material/button';
interface sliderImage {
  imageSrc : string;
  imageAlt: string;
}
interface NavigationItem {
  path: string;
  label: string;
  icon?: string;
  ariaLabel: string;
}
@Component({
  selector: 'app-objet',
  standalone: true,
  imports: [ProjetComponent,MatTooltip, MatButton,RouterModule,CommonModule,MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './objet.component.html',
  styleUrl: './objet.component.css' ,
 
})
export class ObjetComponent implements OnInit {  constructor(private link : Router ,
  private router: Router){}

@Input () indicators=true; 
@Input() auto=false;
@Input() SlideInterval=3000;
navigationItems: NavigationItem[] = 
[
  {
    path: '/home',
    label: 'Home',
    icon: 'home',
    ariaLabel: 'Navigate to home page'
  } ,
  {
    path: '/services',
    label: 'Services',
    ariaLabel: 'Navigate to services page'
  },
  {
    path: '/contact',
    label: 'Contact',
    ariaLabel: 'Navigate to contact page'
  }
] ; 


  isCurrentRoute(path: string): boolean {
    return this.router.url === path;
  }

  handleNavigation(item: NavigationItem): void {
    // Add any additional navigation logic here
    console.log(`Navigating to ${item.path}`);
  }

 images  =[ {
  imageSrc:'https://storage-asset.msi.com/global/picture/image/feature/nb/GE/Raider-GE78-HX-13V/kv-pd.png',
  imageAlt:'nature1',
},{
  imageSrc:'https://skymil-informatique.com/49419-large_default/ryzen-3-3200g-vega-8-16-gb-nvme-512gb.jpg',
  imageAlt:'nature2',
},{
  imageSrc:'https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/p/c/pc-portable-hp-15-fd0097nk-i5-13e-gen-32go-512go-ssd-noir.jpg',
  imageAlt:'nature3',
},{
  imageSrc:'https://m.media-amazon.com/images/I/71qCKJsGD8L._AC_UF1000,1000_QL80_.jpg',
  imageAlt:'nature4',
},
] 
onMouseOver(menuItem: string) {
  console.log(`${menuItem} menu item hovered`);
  // You can add logic for mouse over effects here, e.g., changing styles
}
 onMouseOut(menuItem: string) {
    console.log(`${menuItem} menu item left`);
    // You can reset styles or other actions on mouse out
  }
 selectImage(index:number) :void{ this.selectedIndex = index; }

  ngOnInit() : void{
  if(this.auto) { 
    this.autoSlideImage();
  } 
  }
  autoSlideImage() :void{ setInterval(() => {this.onNextClcik(); }, 
 this.SlideInterval); }

  
  onNextClcik() :void{ this.selectedIndex = (this.selectedIndex + 1) % this.images.length; }
  

 
 selectedIndex= 0;
 start(){  this.link.navigate(['/projet']); 
 }}
