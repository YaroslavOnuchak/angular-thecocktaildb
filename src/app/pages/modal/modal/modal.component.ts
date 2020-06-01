import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Ingredient, Ingredients } from 'src/app/core/interfaces';
import { IngredientsService } from 'src/app/core/services/ingredients/ingredients.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  listtIngAdd: Array<Ingredient>
  modalData: Array<Ingredient>
  constructor(
    private modalService: BsModalService,
       private addServis: IngredientsService
  ) { }

  ngOnInit(): void {
    this.listtIngAdd = this.modalData
  }
  hideModal() {
    this.modalService.hide(1);
  }
  delIng(id:Ingredient): void {
 this.addServis.delIng(id);

  }

}
