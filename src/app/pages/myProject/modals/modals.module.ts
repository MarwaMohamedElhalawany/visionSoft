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


@NgModule({
  declarations: [
    AddEditPermissionComponent,
    AddBranchComponent,
    AddCityComponent,
    AddAreaComponent,
    AddReasonsComponent,
  ],
  imports: [
    CommonModule,
    ModalsRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    //  MatSelectModule,
    // MatInputModule,
    // MatFormFieldModule,
    DropdownModule

  ],
  exports:[
    AddEditPermissionComponent,
    AddBranchComponent,

    AddCityComponent,
    AddAreaComponent,
    AddReasonsComponent,
  ]
})
export class ModalsModule { }
