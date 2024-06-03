import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionsComponent } from './regions.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ModalsModule } from 'src/app/_metronic/partials';



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
