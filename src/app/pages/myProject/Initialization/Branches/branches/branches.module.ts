import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchesComponent } from './branches.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ModalsModule } from '../../../modals/modals.module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    BranchesComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NgxPaginationModule,
    ModalsModule,



    RouterModule.forChild([
      {
        path: '',
        component:BranchesComponent,
      },
      
    ]),
  ]
})
export class BranchesModule { }
