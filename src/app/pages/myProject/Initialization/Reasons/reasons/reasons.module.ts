import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReasonsComponent } from './reasons.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ModalsModule } from '../../../modals/modals.module';



@NgModule({
  declarations: [
    ReasonsComponent
  ],
  imports: [
    CommonModule,
TranslateModule,
ModalsModule,
    RouterModule.forChild([
      {
        path: '',
        component:ReasonsComponent,
      },
      
    ]),
  ]
})
export class ReasonsModule { }
