import { Component, OnInit, Input } from '@angular/core';
import { Drinks, Drink } from 'src/app/core/interfaces';

@Component({
  selector: 'app-coctail-item',
  templateUrl: './cocktail-item.component.html',
  styleUrls: ['./cocktail-item.component.scss']
})
export class CoctailItemComponent implements OnInit {
  @Input() drink: Drink
  constructor() { }

  ngOnInit(): void {
  }

}
