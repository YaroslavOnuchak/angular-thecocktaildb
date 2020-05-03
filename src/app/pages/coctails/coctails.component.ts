import { Component, OnInit } from '@angular/core';
import { Drinks, Drink } from 'src/app/core/interfaces';
import { DrinksService } from 'src/app/core/services/drinks/drinks.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-coctails',
  templateUrl: './coctails.component.html',
  styleUrls: ['./coctails.component.scss']
})
export class CoctailsComponent implements OnInit {
  listCoctails: Array<Drink>;
  cocktail: Drink;

  // private unsubscribe = new Subject();

  constructor(
    private drinksServise: DrinksService
  ) { }

  ngOnInit(): void {
    this.getTodos('a')
  }
  getTodos(leter: string): void {
    this.drinksServise.getDrinks(leter)
      .subscribe(data => {
        this.listCoctails = data.drinks;
        console.log(this.listCoctails)
      },
        error => console.error(error)
      )
  }
  private getCocktail(idDrink: number): void {
    this.drinksServise.getDrinkData(idDrink)
      .subscribe((data) => {
        this.cocktail = data;
      })
  }

}
