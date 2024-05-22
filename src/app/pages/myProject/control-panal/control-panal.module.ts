import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPanalComponent } from './control-panal.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ControlPanalComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: '',
        component: ControlPanalComponent,
      },
    ]),

  ]
})
export class ControlPanalModule { }
