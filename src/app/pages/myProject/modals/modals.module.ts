import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalsRoutingModule } from './modals-routing.module';
import { AddEditPermissionComponent } from './add-edit-permission/add-edit-permission.component';
import { TranslateModule } from '@ngx-translate/core';
// import { PermissionComponent } from '../Initialization/permission/permission.component';


@NgModule({
  declarations: [
    AddEditPermissionComponent ,
  ],
  imports: [
    CommonModule,
    ModalsRoutingModule,
    TranslateModule,
    

  ],
  exports:[
    AddEditPermissionComponent
  ]
})
export class ModalsModule { }
