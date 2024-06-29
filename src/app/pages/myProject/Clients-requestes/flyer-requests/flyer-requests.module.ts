import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlyerRequestsComponent } from './flyer-requests.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FlyerRequestsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
FormsModule,
ReactiveFormsModule,
 DropdownModule ,
 RouterModule.forChild([
  {
    path: '',
    component: FlyerRequestsComponent,
  },
]),
  ]
})
export class FlyerRequestsModule { }
