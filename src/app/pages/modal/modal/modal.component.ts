import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Ingredient, Ingredients } from 'src/app/core/interfaces';

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
  ) { }

  ngOnInit(): void {
    this.listtIngAdd = this.modalData
  }
  hideModal() {
    this.modalService.hide(1);
  }

}
