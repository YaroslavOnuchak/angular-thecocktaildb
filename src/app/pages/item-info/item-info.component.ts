import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

import { Drink, Ingredient, DrinkFillter } from 'src/app/core/interfaces';
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
  public listCocktail: Array<DrinkFillter>
  public listIngrediends: Array<Ingredient> = []
  private listIngrediendStrIngredient: Array<any> = []

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

  getCocktail(idDrink: number): void {
    this.drinksServise.getDrinkInfo(idDrink)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data) => {
        this.cocktail = data.drinks;
        console.log('rere', this.cocktail[0]);
        this.getlistIngrediendName(this.cocktail[0]);


        // for (let i = 1; i < 16; i++) {
        // }
      })
  }
  private getIngredientId(idIngredient: number): void {
    this.ingredientsService.getIngredientsById(idIngredient)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data) => {
        console.log('info2', data.ingredients)
        this.ingredientInfo = data.ingredients
        this.checkCocktrailByIngredient(this.ingredientInfo[0].strIngredient)

      })
  }
  private checkCocktrailByIngredient(strIngredient: string): void {
    this.drinksServise.getDrinksByIngrediend(strIngredient)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data) => {
        this.listCocktail = data.drinks;
      })
  }
  public getlistIngrediendName(obj: Drink): void {
    for (let key in obj) {
      this.listIngrediendStrIngredient.push(obj[key])
    }
    this.listIngrediendStrIngredient = this.listIngrediendStrIngredient.slice(21, 36)
    console.log('1 listIngrediendStrIngredient', this.listIngrediendStrIngredient)
    this.getListIngrediend(this.listIngrediendStrIngredient)

  }
  getListIngrediend(ingientName: Array<string>): void {
    ingientName.forEach(el =>
      this.ingredientsService.getIngredientsList(el)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((data) => {
          data.ingredients.forEach(el => {
            if (el !== null) {
              this.listIngrediends.push(el)
            }
          })

          console.log('1 ', this.listIngrediends)

        })
    )
  }


}
