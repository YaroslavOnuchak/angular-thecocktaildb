import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Drink } from 'src/app/core/interfaces';
import { DrinksService } from 'src/app/core/services/drinks/drinks.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import AOS from 'aos';

@Component({
  selector: 'app-coctails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss'],
})
export class CoctailsComponent implements OnInit {
  public arrFirstLetter = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  public count: number;
  public page: number = 1;
  public maxSize: number;
  public cocktail: Drink;
  public listCocktails: Array<Drink> = [];
  public listCocktailsFlter: Array<Drink>;
  public returnedArray: Array<Drink> = [];
  public toggleLetter: boolean = false;
  public toggleLoader: boolean = false;

  private toggle: boolean = true;

  constructor(private drinksServise: DrinksService) {}

  ngOnInit(): void {
    this.toggleLoader = false;
    this.getDrinksAll();
    AOS.init();
  }

  pageChanged(event?: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.count = this.returnedArray.length;
    if (this.toggle) {
      this.returnedArray = this.listCocktails.slice(startItem, endItem);
    } else {
      this.returnedArray = this.listCocktailsFlter.slice(startItem, endItem);
    }
    window.scrollTo(0, 0);
  }

  getDrinksByLetter(letter: string): void {
    this.cleanRadiobyType();
    this.drinksServise.getDrinksByLetter(letter).subscribe(
      (data) => {
        this.listCocktailsFlter = data.drinks;
        if (!this.listCocktailsFlter) {
          this.count = 0;
          this.returnedArray = null;
        }
        this.count = this.listCocktailsFlter.length;
        this.returnedArray = this.listCocktailsFlter.slice(0, 40);
        if (this.count / 40 <= 1) {
          this.maxSize = 1;
        }
      },
      (error) => console.error(error)
    );
    this.toggle = false;
  }
  getDrinksByType(letter: string): void {
    this.cleanRadioLeter();
    this.drinksServise.getDrinksStrAlcoholic(letter).subscribe(
      (data) => {
        this.listCocktailsFlter = data.drinks;
        if (!this.listCocktailsFlter) {
          this.count = 0;
          this.returnedArray = null;
        }
        this.count = this.listCocktailsFlter.length;
        this.returnedArray = this.listCocktailsFlter.slice(0, 40);
      },
      (error) => console.error(error)
    );
    this.toggle = false;
  }

  getDrinksAll(): void {
    this.maxSize = 3;
    this.cleanRadioLeter();
    this.toggleLetter = false;
    this.listCocktails = [];
    this.arrFirstLetter.forEach((el) => {
      this.drinksServise.getDrinksByLetter(el).subscribe(
        (data) => {
          data.drinks.forEach((ele) => this.listCocktails.push(ele));
          this.returnedArray = this.listCocktails.slice(0, 40);
          this.count = this.returnedArray.length;
          this.toggleLoader = true;
        },
        (error) => console.error(error)
      );
    });
    this.listCocktails.sort();
    this.toggle = true;
    // this.loader();
  }
  // loader(): void {
  //   window.onload = () => {
  //     document.querySelectorAll('img').forEach((el) => {
  //       if (el.width > 0) {
  //         this.toggleLoader = true;
  //       }
  //     });
  //   };
  // }
  cleanRadioLeter(): void {
    document.getElementsByName('inlineRadioOptions').forEach((el) => {
      if (el.getAttribute('checked')) {
        el.setAttribute('checked', 'false');
      }
    });
  }
  cleanRadiobyType(): void {
    document.getElementsByName('searchPriority').forEach((el) => {
      if (el.getAttribute('checked')) {
        console.log('object', el);
        el.setAttribute('checked', 'false');
      }
    });
  }
  // getDrinksAllById(): void {
  //   let arr: any = new Array(20000).fill(12000);
  //   arr = arr.map((v: number) => v + 1)
  //   arr.forEach(el => this.drinksServise.getDrinkInfo(el).
  //     subscribe(data => {
  //       if (data.drinks !== null) {
  //         data.drinks.forEach(ele => this.listCocktails1.push(ele))
  //       }
  //     }
  //     )
  //   )
  //   console.log(arr)
  //   console.log(this.listCocktails1)
  // }
}
