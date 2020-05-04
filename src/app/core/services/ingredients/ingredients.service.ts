import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredients, Ingredient } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid='
  constructor(
    private http: HttpClient
  ) { }
  // getIngredientsById(): Observable<Ingredients> {
  //   return this.http.get<Ingredients>(`${this.url}`)
  // }
  getIngredientsById(idIngredient: number): Observable<Ingredients> {
    return this.http.get<Ingredients>(`${this.url}${idIngredient}`)
  }


}
