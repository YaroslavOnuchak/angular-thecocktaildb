import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredients, Ingredient } from '../../interfaces';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  buy: Array<Ingredient> = [];

  private url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid='
  private urlByname = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=';

  private dbPath = '/Ingredients';

  customersRef: AngularFireList<Ingredient> = null;

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase
  ) {
    this.customersRef = db.list(this.dbPath);
  }
  putToDataBase(customer: Ingredient): void {
    this.customersRef.push(customer);
  }
  getIngredientsById(idIngredient: number): Observable<Ingredients> {
    return this.http.get<Ingredients>(`${this.url}${idIngredient}`)
  }
  getIngredientsList(ingientName: string): Observable<Ingredients> {
    return this.http.get<Ingredients>(`${this.urlByname}${ingientName}`)
  }

  addTo(ingred?: Ingredient): Array<Ingredient> {
    let arr: any = [];
    // this.buy.push(ingred)
    arr.push(ingred)
    arr.forEach((el, index) => {
      if (el == undefined) {
        this.buy.splice(index, 1)
      }
      else if (!this.buy.includes(el)) {
        this.buy.push(el)
      }
    })
    return this.buy
  }
  delIng(id: Ingredient): Array<Ingredient> {
    this.buy.splice(this.buy.indexOf(id), 1)
    return this.buy
  }
}
