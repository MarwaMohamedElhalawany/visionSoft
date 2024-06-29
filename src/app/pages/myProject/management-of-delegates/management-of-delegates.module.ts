import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementOfDelegatesRoutingModule } from './management-of-delegates-routing.module';
import { ManagementOfDelegatesComponent } from './management-of-delegates/management-of-delegates.component';
import { NewDelegateComponent } from './new-delegate/new-delegate.component';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManagementOfDelegatesComponent,
    NewDelegateComponent
  ],
  imports: [
    CommonModule,
    ManagementOfDelegatesRoutingModule,
    TranslateModule,
FormsModule,
ReactiveFormsModule,
 DropdownModule

  ]
})
export class ManagementOfDelegatesModule { }
