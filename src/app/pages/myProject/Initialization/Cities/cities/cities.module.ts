import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CitiesComponent } from './cities.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalsModule } from '../../../modals/modals.module';



@NgModule({
  declarations: [
    CitiesComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NgxPaginationModule,
    ModalsModule,
    RouterModule.forChild([
      {
        path: '',
        component:CitiesComponent,
      },
      
    ]),
  ]
})
export class CitiesModule { }
