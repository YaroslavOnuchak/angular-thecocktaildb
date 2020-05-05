import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/core/interfaces';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { IngredientsService } from 'src/app/core/services/ingredients/ingredients.service';

@Component({
  selector: 'app-ingredient-info',
  templateUrl: './ingredient-info.component.html',
  styleUrls: ['./ingredient-info.component.scss']
})
export class IngredientInfoComponent implements OnInit, OnDestroy {
  public ingredientInfo: Array<Ingredient>

  private unsubscribe = new Subject();

  constructor(
    private activRoute: ActivatedRoute,
    private ingredientsService: IngredientsService
  ) { }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  ngOnInit(): void {
    this.getIngredient();
  }
  private getIngredient(): void {
    this.activRoute.params
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        params => {
          this.getIngredientId(params.idIngredient)
        });
    // console.log('info', this.cocktail)
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
