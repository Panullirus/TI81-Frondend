import { Injectable } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class UpdateSheetService {

  closeResult = '';

  constructor(private _modal: NgbModal) { }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openExperience(content: any, dataContainer: any) {
    this._modal.open(content, {ariaLabelledBy: 'update-experiencie'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      return dataContainer = {};
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      return dataContainer = {};
    });
  }
}
