import { Component, OnInit, OnDestroy } from '@angular/core';
import { Drink } from 'src/app/core/interfaces';
import { Subject } from 'rxjs';
import { DrinksService } from 'src/app/core/services/drinks/drinks.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-cocktail-info',
  templateUrl: './cocktail-info.component.html',
  styleUrls: ['./cocktail-info.component.scss']
})
export class CocktailInfoComponent implements OnInit, OnDestroy {
  public cocktail: Drink;

  private unsubscribe = new Subject();

  constructor(
    private activRoute: ActivatedRoute,
    private drinksServise: DrinksService
  ) { }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  ngOnInit(): void {
    this.getCocktailId();
  }
  private getCocktailId(): void {
    this.activRoute.params
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        params => {
          this.getCocktail(params.idDrink)
        });
    console.log('info', this.cocktail)
  }
  private getCocktail(idDrink: number): void {
    this.drinksServise.getDrinkInfo(idDrink)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data) => {
        this.cocktail = data.drinks[0];
        console.log('info2', data.drinks)
      })

  }

}
