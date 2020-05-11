import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredients } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid='
  private urlByname = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i='
  constructor(
    private http: HttpClient
  ) { }
  // getIngredientsById(): Observable<Ingredients> {
  //   return this.http.get<Ingredients>(`${this.url}`)
  // }
  getIngredientsById(idIngredient: number): Observable<Ingredients> {
    return this.http.get<Ingredients>(`${this.url}${idIngredient}`)
  }
  getIngredientsList(ingientName: string): Observable<Ingredients> {
    return this.http.get<Ingredients>(`${this.urlByname}${ingientName}`)
  }


}
