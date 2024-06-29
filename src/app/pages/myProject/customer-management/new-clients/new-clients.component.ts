import { Component } from '@angular/core';

@Component({
  selector: 'app-new-clients',
  templateUrl: './new-clients.component.html',
  styleUrls: ['./new-clients.component.scss']
})
export class NewClientsComponent {
  branchList: any[] = [
    { name: 'فرع جيزة' },
    { name: 'عمولة فرع رئيسي' },
    { name: '333' },
    ];
    selectedBranch: any ;

    rows: any[] = [];
  
    addRow() {
      this.rows.push({
        selectedBranch: null,
        area: '',
        address: ''
      });
    }
  
    deleteRow(index: number) {
      this.rows.splice(index, 1);
    }
}

