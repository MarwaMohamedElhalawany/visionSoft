import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsRoutingModule } from './modals-routing.module';
import { AddEditPermissionComponent } from './add-edit-permission/add-edit-permission.component';
import { TranslateModule } from '@ngx-translate/core';
import { AddBranchComponent } from './add-branch/add-branch/add-branch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCityComponent } from './add-city/add-city/add-city.component';
import { AddAreaComponent } from './add-area/add-area/add-area.component';
import { AddReasonsComponent } from './add-reasons/add-reasons.component';
import { DropdownModule } from 'primeng/dropdown';
import { AddAcountComponent } from './add-acount/add-acount/add-acount.component';
import { AddExchangePermitComponent } from './add-exchange-permit/add-exchange-permit.component';
import { AddReceiptComponent } from './add-receipt/add-receipt.component';


@NgModule({
  declarations: [
    AddEditPermissionComponent,
    AddBranchComponent,
    AddCityComponent,
    AddAreaComponent,
    AddReasonsComponent,
    AddAcountComponent,
    AddExchangePermitComponent,
    AddReceiptComponent,
  ],
  imports: [
    CommonModule,
    ModalsRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    
    DropdownModule

  ],
  exports:[
    AddEditPermissionComponent,
    AddBranchComponent,
AddAcountComponent,
    AddCityComponent,
    AddAreaComponent,
    AddReasonsComponent,
    AddExchangePermitComponent,
    AddReceiptComponent,
  ]
})
export class ModalsModule { }
