import { Component, ViewChild } from '@angular/core';
import { AddAcountComponent } from '../../../modals/add-acount/add-acount/add-acount.component';
import { ModalConfig } from 'src/app/_metronic/partials';

@Component({
  selector: 'app-electronic-wallets',
  templateUrl: './electronic-wallets.component.html',
  styleUrls: ['./electronic-wallets.component.scss']
})
export class ElectronicWalletsComponent {

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
