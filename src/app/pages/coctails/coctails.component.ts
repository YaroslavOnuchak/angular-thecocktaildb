import { Component, OnInit } from '@angular/core';
import { Drinks } from 'src/app/core/interfaces';
import { DrinksService } from 'src/app/core/services/drinks/drinks.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-coctails',
  templateUrl: './coctails.component.html',
  styleUrls: ['./coctails.component.scss']
})
export class CoctailsComponent implements OnInit {
  listCoctails: Array<Drinks>;

  // private unsubscribe = new Subject();

  constructor(
    // private drinksServise: DrinksService
  ) { }

  ngOnInit(): void {
    // this.getTodos()
  }
  // private getTodos(): void {
  //   this.drinksServise.getDrinks()
  //     .subscribe(data => {
  //       console.log(data)
  //       this.listCoctails = data;
  //     },
  //       error => console.error(error)
  //     )
  // }

}
