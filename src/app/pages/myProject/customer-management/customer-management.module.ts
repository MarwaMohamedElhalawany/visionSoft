import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerManagementRoutingModule } from './customer-management-routing.module';
import { ClientsComponent } from './clients/clients.component';
import { NewClientsComponent } from './new-clients/new-clients.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ReplacementShipmentsComponent } from './replacement-shipments/replacement-shipments.component';


@NgModule({
  declarations: [
    ClientsComponent,
    NewClientsComponent,
    ReplacementShipmentsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
FormsModule,
ReactiveFormsModule,
 DropdownModule ,
CustomerManagementRoutingModule ]
})
export class CustomerManagementModule { }
