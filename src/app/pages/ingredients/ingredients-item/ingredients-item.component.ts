import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/core/interfaces';

@Component({
  selector: 'app-ingredients-item',
  templateUrl: './ingredients-item.component.html',
  styleUrls: ['./ingredients-item.component.scss']
})
export class IngredientsItemComponent implements OnInit {
  @Input() ingredient: Ingredient;

  constructor() { }

  ngOnInit(): void {
  }

}
