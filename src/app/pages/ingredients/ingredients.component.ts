import { Component, OnInit } from '@angular/core';
import { Ingredient, Ingredients } from 'src/app/core/interfaces';
import { IngredientsService } from 'src/app/core/services/ingredients/ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  // public listIngredients: Ingredients
  public listIngredients: Array<Ingredient> = [];

  private ingredientId: number = 1;
  private maxLengthArrayIngredients: number = 1000;

  constructor(
    private ingredientsServise: IngredientsService
  ) { }

  ngOnInit(): void {
    this.getIngredientsAll()
  }
  getIngredientsAll(): void {
    // console.log("11111111", this.listIngredients)
    while (this.maxLengthArrayIngredients > this.ingredientId) {
      this.ingredientsServise.getIngredientsById(this.ingredientId)
        .subscribe(data => {
          if (data.ingredients !== null) {
            data.ingredients.forEach(el =>
              this.listIngredients.push(el))
            // console.log('11', this.listIngredients)
          }
          // // this.listIngredients = data.ingredients
          // console.log("22222222222", data.ingredients)
        },
          error => console.error(error)
        )
      this.ingredientId++
    }
    this.listIngredients.sort()
  }
}
