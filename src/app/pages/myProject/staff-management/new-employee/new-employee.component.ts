import { Component } from '@angular/core';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent {
    branchList: any[] = [
  { name: 'فرع جيزة' },
  { name: 'عمولة فرع رئيسي' },
  { name: '333' },
  ];
  selectedBranch: any ;
  filteredBranchList: string[] = this.branchList;
}
