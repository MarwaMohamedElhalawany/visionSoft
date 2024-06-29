import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-exchange-acc-dtls',
  templateUrl: './exchange-acc-dtls.component.html',
  styleUrls: ['./exchange-acc-dtls.component.scss']
})
export class ExchangeAccDtlsComponent {
  branchList: any[] = [
    { name: '-- اختر || Chose -- ' },
    { name: ' ( الرئيسي ) خزنة رئيسية ' },
    ];
    selectedBranch: any ;
  filteredBranchList: string[] = this.branchList;
  branchControl = new FormControl('');
  constructor(
   
  ) {
    this.branchControl.valueChanges.subscribe((value:any) => {
      this.filterBranches(value || ''); // Handle null or undefined values
    });
  }
  
  filterBranches(value: string) {
    const filterValue = value.toLowerCase();
    this.filteredBranchList = this.branchList.filter(branch => branch.toLowerCase().includes(filterValue));
  }

}
