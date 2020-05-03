import { Component, OnInit, ElementRef } from '@angular/core';
import { Drinks, Drink } from 'src/app/core/interfaces';
import { DrinksService } from 'src/app/core/services/drinks/drinks.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-coctails',
  templateUrl: './coctails.component.html',
  styleUrls: ['./coctails.component.scss']
})
export class CoctailsComponent implements OnInit {
  public listCoctails: Array<Drink> = [];
  cocktail: Drink;
  public mass = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  // public arStrAlcoholic = ['Alcoholic', 'Non_alcoholic', 'Optional_alcohol']

  // private unsubscribe = new Subject();

  constructor(
    private drinksServise: DrinksService,
    private el: ElementRef


  ) { }

  ngOnInit(): void {
    // this.getTodos('a')
    this.getDrinksAll()
    // this.getTodos3()
  }
  getDrinks(leter: string): void {
    this.el.nativeElement.style.textShadow = `0 2px 5px red`;
    this.drinksServise.getDrinksByLetter(leter)
      .subscribe(data => {
        this.listCoctails = data.drinks;
        console.log(this.listCoctails)
      },
        error => console.error(error)
      )
  }

  getDrinksAll(): void {
    this.mass.forEach(el =>
      this.drinksServise.getDrinksByLetter(el)
        .subscribe(data => {
          data.drinks.forEach(ele => this.listCoctails.push(ele))
          console.log(this.listCoctails)
        },
          error => console.error(error)
        ))
    this.listCoctails.sort()

  }



  private getCocktail(idDrink: number): void {
    this.drinksServise.getDrinkData(idDrink)
      .subscribe((data) => {
        this.cocktail = data;
      })
  }

}
