import { Component, ViewChild } from '@angular/core';
import { ModalConfig } from 'src/app/_metronic/partials';
import { AddAcountComponent } from '../../../modals/add-acount/add-acount/add-acount.component';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss']
})
export class BanksComponent {

  addAccountConfig: ModalConfig = {
    modalTitle: 'حذف',
    dismissButtonLabel: 'حذف',
    closeButtonLabel: 'الغاء'
  };
  @ViewChild('modalAddAccount') private modalAddAcountComponent: AddAcountComponent;

async addAcount() {
  // event.stopPropagation();
  return await this.modalAddAcountComponent.open();
}
}
