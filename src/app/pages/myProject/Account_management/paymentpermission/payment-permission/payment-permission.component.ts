import { ModalConfig } from 'src/app/_metronic/partials';
import { Component, ViewChild } from '@angular/core';
import { AddExchangePermitComponent } from '../../../modals/add-exchange-permit/add-exchange-permit.component';

@Component({
  selector: 'app-payment-permission',
  templateUrl: './payment-permission.component.html',
  styleUrls: ['./payment-permission.component.scss']
})
export class PaymentPermissionComponent {
  addExchangeConfig : ModalConfig = {
    modalTitle: 'حذف',
    dismissButtonLabel: 'حذف',
    closeButtonLabel: 'الغاء'
  };
  
  @ViewChild('modalAddExchange') private modalAddExchangeComponent: AddExchangePermitComponent;
  
  async addExchange() {
    // event.stopPropagation();
    return await this.modalAddExchangeComponent.open();
  }
  
}
