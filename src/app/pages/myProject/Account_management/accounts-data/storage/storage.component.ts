import { Component, ViewChild } from '@angular/core';
import { AddAcountComponent } from '../../../modals/add-acount/add-acount/add-acount.component';
import { ModalConfig } from 'src/app/_metronic/partials';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent {

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
