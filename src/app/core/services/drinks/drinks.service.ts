import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Drinks, Drink, DrinksFilter } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  private urlByFirstLetter = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=`;
  private urlById = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
  private urlByNameIngred = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='
  // private urlStrAlcoholic = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=`;

  constructor(
    private http: HttpClient
  ) { }
  getDrinksByLetter(letter: string): Observable<Drinks> {
    return this.http.get<Drinks>(`${this.urlByFirstLetter}${letter}`)
  }
  // getDrinksStrAlcoholic(word: string): Observable<Drinks> {
  //   return this.http.get<Drinks>(`${this.urlStrAlcoholic}${word}`)
  // }
  getDrinkInfo(idDrink: number): Observable<Drinks> {
    return this.http.get<Drinks>(`${this.urlById}${idDrink}`)
  }
  getDrinksByIngrediend(strIngredient: string): Observable<DrinksFilter> {
    return this.http.get<DrinksFilter>(`${this.urlByNameIngred}${strIngredient}`)

  }
}
