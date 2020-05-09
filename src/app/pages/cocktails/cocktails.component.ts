import { Component, OnInit } from '@angular/core';
import { Drinks, Drink } from 'src/app/core/interfaces';
import { DrinksService } from 'src/app/core/services/drinks/drinks.service';
import { FormGroup } from '@angular/forms';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';


@Component({
  selector: 'app-coctails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss']
})
export class CoctailsComponent implements OnInit {
  public listCocktails: Array<Drink> = [];
  public arrFirstLetter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  public count: number;
  public alco: string;

  cocktail: Drink;

  public returnedArray: Array<Drink> = []

  constructor(
    private drinksServise: DrinksService
  ) { }

  ngOnInit(): void {
    this.getDrinksAll()
  }

  pageChanged(event?: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.listCocktails.slice(startItem, endItem);
    this.count = this.returnedArray.length
  }

  getDrinksByLetter(letter: string): void {
    this.drinksServise.getDrinksByLetter(letter)
      .subscribe(data => {
        this.returnedArray = data.drinks;
        if (!this.returnedArray) {
          // console.log(this.listCocktails)
          this.count = 0;
        }
        this.count = this.returnedArray.length
      },
        error => console.error(error)
      )
  }

  getDrinksAll(): void {
    this.arrFirstLetter.forEach(el =>
      this.drinksServise.getDrinksByLetter(el)
        .subscribe(data => {
          data.drinks.forEach(ele => this.listCocktails.push(ele))
          this.returnedArray = this.listCocktails.slice(0, 40);
          this.count = this.returnedArray.length
        },
          error => console.error(error)
        ))
    this.listCocktails.sort()

  }

}
