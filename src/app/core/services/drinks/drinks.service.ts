import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Drinks } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  private url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

  constructor(
    private http: HttpClient
  ) { }
  getDrinks(): Observable<any> {
    return this.http.get<any>(`${this.url}`)
  }
}
