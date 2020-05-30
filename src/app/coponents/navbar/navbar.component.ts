import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from 'src/app/pages/modal/modal/modal.component';
import { Ingredients } from 'src/app/core/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  modalRef: BsModalRef;
  // titleTodo: boolean;
  setModal: object;
  listIng: Ingredients

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }
  openModal(): void {
    if (1 > 0) {
      // this.titleTodo = false;
      // this.todoData = todo;
      this.modalRef = this.modalService.show(
        ModalComponent,
        Object.assign({}, {
          ignoreBackdropClick: false,
          initialState: {
            // titleTodo: this.titleTodo,
            modalData: this.listIng,
            // submit: this.updateTodo.bind(this)
          }
        })
      );
    }
  }
}
