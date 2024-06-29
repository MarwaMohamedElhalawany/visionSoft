import { Component, ViewChild } from '@angular/core';
import { ModalConfig } from 'src/app/_metronic/partials';
import { AddReceiptComponent } from '../../../modals/add-receipt/add-receipt.component';

@Component({
  selector: 'app-recive-permission',
  templateUrl: './recive-permission.component.html',
  styleUrls: ['./recive-permission.component.scss']
})
export class RecivePermissionComponent {
  addExchangeConfig: ModalConfig = {
    modalTitle: 'حذف',
    dismissButtonLabel: 'حذف',
    closeButtonLabel: 'الغاء'
  };
  
  @ViewChild('modalAddExchange') private modalAddReceiptComponent: AddReceiptComponent;
  
  async addRecive() {
    // event.stopPropagation();
    return await this.modalAddReceiptComponent.open();
  }
  
}
