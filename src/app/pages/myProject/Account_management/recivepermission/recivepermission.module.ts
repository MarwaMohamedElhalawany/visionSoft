import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecivepermissionRoutingModule } from './recivepermission-routing.module';
import { RecivePermissionComponent } from './recive-permission/recive-permission.component';
import { TranslateModule } from '@ngx-translate/core';
import { ModalsModule } from '../../modals/modals.module';


@NgModule({
  declarations: [
    RecivePermissionComponent
  ],
  imports: [
    CommonModule,
    RecivepermissionRoutingModule,
    TranslateModule,
    ModalsModule,

  ]
})
export class RecivepermissionModule { }
