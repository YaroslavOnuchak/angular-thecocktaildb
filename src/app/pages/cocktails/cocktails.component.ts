import { Component, OnInit } from '@angular/core';
import { Drinks, Drink } from 'src/app/core/interfaces';
import { DrinksService } from 'src/app/core/services/drinks/drinks.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-coctails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss']
})
export class CoctailsComponent implements OnInit {
  public listCocktails: Array<Drink> = [];
  public arrFirstLetter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  cocktail: Drink;

  public countCocktails: number;


  // private unsubscribe = new Subject();

  constructor(
    private drinksServise: DrinksService

  ) { }

  ngOnInit(): void {
    // this.getTodos('a')
    this.getDrinksAll()
    // this.getTodos3()
  }
  getDrinksByLetter(letter: string): void {
    this.drinksServise.getDrinksByLetter(letter)
      .subscribe(data => {
        this.listCocktails = data.drinks;
        if (!this.listCocktails) {
          console.log(this.listCocktails)
          this.countCocktails = 0;
        }
        this.countCocktails = this.listCocktails.length
      },
        error => console.error(error)
      )
  }

  getDrinksAll(): void {
    this.arrFirstLetter.forEach(el =>
      this.drinksServise.getDrinksByLetter(el)
        .subscribe(data => {
          data.drinks.forEach(ele => this.listCocktails.push(ele))
          this.countCocktails = this.listCocktails.length
        },
          error => console.error(error)
        ))
    this.listCocktails.sort()
    console.log(this.listCocktails)
  }
}