import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsRoutingModule } from './modals-routing.module';
import { AddEditPermissionComponent } from './add-edit-permission/add-edit-permission.component';
import { TranslateModule } from '@ngx-translate/core';
import { AddBranchComponent } from './add-branch/add-branch/add-branch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReasonsComponent } from './reasons/reasons/reasons.component';
import { AddCityComponent } from './add-city/add-city/add-city.component';
import { AddAreaComponent } from './add-area/add-area/add-area.component';


@NgModule({
  declarations: [
    AddEditPermissionComponent,
    AddBranchComponent,
    ReasonsComponent,
    AddCityComponent,
    AddAreaComponent,
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
    

  ],
  exports:[
    AddEditPermissionComponent,
    AddBranchComponent,
    ReasonsComponent,
    AddCityComponent,
    AddAreaComponent
  ]
})
export class ModalsModule { }
