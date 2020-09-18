import { Component, OnInit, HostListener, Inject } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate,
} from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate(500)]),
      transition(':leave', [animate(500)]),
    ]),
  ],
})
export class AppComponent {
  title = 'the-best-Cocktails';
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 370) {
      let element = document.getElementById('navbar');
      element.classList.add('sticky');
    } else {
      let element = document.getElementById('navbar');
      element.classList.remove('sticky');
    }
  }
  constructor(private router: Router) {}
  @HostListener('window:resize', ['$event'])
  onWindowResize(e) {
    console.log('object', window.innerWidth);
    if (window.innerWidth < 769) {
      this.router.navigate(['cocktails']);
    } else {
      this.router.navigate(['double-page']);
    }
  }
}
