import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { TranslationService } from 'src/app/modules/i18n';
import { HttpHelperService } from '../../../Services/http-helper.service';
import { Cities } from '../../../Services/global-end-point.service';
import { AddCityComponent } from '../../../modals/add-city/add-city/add-city.component';
import { ModalConfig } from 'src/app/_metronic/partials';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent {
page:number=1;
pageSize:number=20;
totalCount:number=0;

cityData:any=[] ;
  constructor(
    private httpHelper: HttpHelperService,
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef

  ) { 
  }

checkLang() {
return this.translationService.getSelectedLanguage() == 'ar';
}
ngOnInit()
{
  this.getCities()
}
selectLanguage() {
const currentLang = this.translationService.getSelectedLanguage();
const newLang = currentLang === 'en' ? 'ar' : 'en';
this.translationService.setLanguage(newLang);
}
getCities(){
  console.log(123456789 )

  let data = {
  
    page : this.page,
    pagesize:this.pageSize,


  }
  this.httpHelper.Get(Cities.getCities , data).subscribe({
    next: (response: any) => {
      this.cityData = response.result.data;
     this.pageSize=response.result.pagesize;
     this.totalCount=response.result.count;
      this.cdr.detectChanges();
      console.log(this.cityData )
    },
    error: () => {
    },
  })
}
onChangePage(pageNumber: any): void {
  this.page=pageNumber;
  this.getCities();
}
addCityConfig: ModalConfig = {
  modalTitle: 'حذف',
  dismissButtonLabel: 'حذف',
  closeButtonLabel: 'الغاء'
};

@ViewChild('modalAddCity') private modalAddCityComponent: AddCityComponent;

async addCity() {
  // event.stopPropagation();
  return await this.modalAddCityComponent.open();
}
}
