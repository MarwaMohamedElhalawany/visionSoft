import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-replacement-shipments',
  templateUrl: './replacement-shipments.component.html',
  styleUrls: ['./replacement-shipments.component.scss']
})
export class ReplacementShipmentsComponent {
  branchList: any[] = [
    { name: 'فرع جيزة' },
    { name: 'عمولة فرع رئيسي' },
    { name: '333' },
    ];
    selectedBranch: any ;
    data: any[] = [];
    allData: any[] = []; // Store all data to filter it based on the search
  
    constructor(private http: HttpClient) { }
  
    ngOnInit(): void {
      this.fetchData();
    }
  
    fetchData(): void {
      this.http.get<any[]>('API_URL').subscribe(response => {
        this.allData = response;
        this.data = response;
      });
    }
  
    onSearch(event: KeyboardEvent): void {
      const inputElement = event.target as HTMLInputElement;
      const term = inputElement.value;
  
      if (term) {
        this.data = this.allData.filter(item => 
          Object.values(item).some(val => 
            String(val).toLowerCase().includes(term.toLowerCase())
          )
        );
      } else {
        this.data = this.allData;
      }
    }
  
}
