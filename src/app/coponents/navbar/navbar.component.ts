import { Component, OnInit, OnChanges } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from 'src/app/pages/modal/modal/modal.component';
import { Ingredient } from 'src/app/core/interfaces';
import { IngredientsService } from 'src/app/core/services/ingredients/ingredients.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {
  modalRef: BsModalRef;
  // titleTodo: boolean;
  setModal: object;
  listIng: Array<Ingredient> = []


  constructor(
    private modalService: BsModalService,
    private addServis: IngredientsService,
  ) { }

  ngOnInit(): void {
    this.modalList()
  }
  ngOnChanges(): void {
  }
  modalList(): void {
    this.listIng = this.addServis.addTo();

    // document.querySelector('.material-icons').nativeElement.style.textShadow = ' 0 0 5px black'
  }
  openModal(): void {
    if (this.listIng.length > 0) {
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
