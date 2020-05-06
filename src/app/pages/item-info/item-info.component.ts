import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

import { Drink, Ingredient } from 'src/app/core/interfaces';
import { DrinksService } from 'src/app/core/services/drinks/drinks.service';
import { IngredientsService } from 'src/app/core/services/ingredients/ingredients.service';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss']
})
export class ItemInfoComponent implements OnInit, OnDestroy {
  public cocktail: Array<Drink>;
  public ingredientInfo: Array<Ingredient>

  private unsubscribe = new Subject();


  constructor(
    private activRoute: ActivatedRoute,
    private drinksServise: DrinksService,
    private ingredientsService: IngredientsService
  ) { }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  ngOnInit(): void {
    this.getItemById();
  }
  private getItemById(): void {
    this.activRoute.params
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        params => {
          this.getCocktail(params.id)
          this.getIngredientId(params.id)
          console.log('param', params)
        });
  }

  private getCocktail(idDrink: number): void {
    this.drinksServise.getDrinkInfo(idDrink)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data) => {
        this.cocktail = data.drinks;
        console.log('info2', data.drinks)
      })
  }
  private getIngredientId(idIngredient: number): void {
    this.ingredientsService.getIngredientsById(idIngredient)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data) => {
        console.log('info2', data.ingredients)
        this.ingredientInfo = data.ingredients
        // data.ingredients.forEach(el =>
        //   this.ingredientInfo.push(el))
      })

  }

}
