import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionsComponent } from './regions.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ModalsModule } from '../../../modals/modals.module';



@NgModule({
  declarations: [
    RegionsComponent,
   
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ModalsModule,


    RouterModule.forChild([
      {
        path: '',
        component:RegionsComponent,
      },
      
    ]),
  ]
})
export class RegionsModule { }
