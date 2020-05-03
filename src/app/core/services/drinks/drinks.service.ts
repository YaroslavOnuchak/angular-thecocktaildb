import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Drinks, Drink } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  private url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=`;

  constructor(
    private http: HttpClient
  ) { }
  getDrinks(leter: string): Observable<Drinks> {
    return this.http.get<Drinks>(`${this.url}${leter}`)
  }
  getDrinkData(idDrink: number): Observable<Drink> {
    return this.http.get<Drink>(`${this.url}/${idDrink}`);
  }
}
