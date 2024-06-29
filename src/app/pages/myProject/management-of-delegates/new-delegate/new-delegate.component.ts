import { Component } from '@angular/core';

@Component({
  selector: 'app-new-delegate',
  templateUrl: './new-delegate.component.html',
  styleUrls: ['./new-delegate.component.scss']
})
export class NewDelegateComponent {
  branchList: any[] = [
    { name: 'فرع جيزة' },
    { name: 'عمولة فرع رئيسي' },
    { name: '333' },
    ];
    selectedBranch: any ;
}
