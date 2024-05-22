import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionComponent } from '../permission/permission.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ModalsModule } from '../../modals/modals.module';
import { TreeModule } from 'primeng/tree';



@NgModule({
  declarations: [
    PermissionComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ModalsModule,
    TreeModule,
    RouterModule.forChild([
      {
        path: '',
        component:PermissionComponent,
      },
      
    ]),
  ]
})
export class PermissionModule { }
