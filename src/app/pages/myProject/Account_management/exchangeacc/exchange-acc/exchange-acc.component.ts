import { Component, ViewChild } from '@angular/core';
import { ModalConfig } from 'src/app/_metronic/partials';
import { AddExchangePermitComponent } from '../../../modals/add-exchange-permit/add-exchange-permit.component';

@Component({
  selector: 'app-exchange-acc',
  templateUrl: './exchange-acc.component.html',
  styleUrls: ['./exchange-acc.component.scss']
})
export class ExchangeAccComponent {
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
