import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient, Ingredients } from 'src/app/core/interfaces';
import { IngredientsService } from 'src/app/core/services/ingredients/ingredients.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

import AOS from 'aos';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnInit {
  public listIngredients: Array<Ingredient> = [];
  public returnedArray: Array<Ingredient>;
  public count: number;
  public toggleLoader: boolean = false;

  @Output() addIngred = new EventEmitter<Ingredient>();

  private ingredientId: number = 1;
  private maxLengthArrayIngredients: number = 1000;
  private unsubscribe = new Subject();
  pageNumber: number = 1;

  constructor(
    private ingredientsServise: IngredientsService,
    private addServis: IngredientsService
  ) {}

  ngOnInit(): void {
    // this.returnedArray = this.listIngredients.slice(0, 40);
    this.getIngredientsAll();
    AOS.init();
    this.toggleLoader = false;
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.listIngredients.slice(startItem, endItem);
    this.count = this.returnedArray.length;
    window.scrollTo(0, 0);
  }
  async getIngredientsAll(): Promise<void> {
    // console.log("11111111", this.listIngredients)
    while (this.maxLengthArrayIngredients > this.ingredientId) {
      const res = await this.ingredientsServise
        .getIngredientsById(this.ingredientId)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(
          (data) => {
            if (data.ingredients !== null) {
              data.ingredients.forEach((el) => this.listIngredients.push(el));
            }
            this.returnedArray = this.listIngredients.slice(0, 40);
            this.count = this.returnedArray.length;
            this.toggleLoader = true;
          },
          (error) => console.error(error)
        );
      this.ingredientId++;
    }
    this.listIngredients.sort();
  }
  openModalEdit(content: Ingredient): void {
    this.addServis.addTo(content);
    this.addServis.putToDataBase(content);
    this.addIngred.emit(content);
  }
}
