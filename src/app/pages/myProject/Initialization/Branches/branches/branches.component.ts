import { AddBranchComponent } from './../../../modals/add-branch/add-branch/add-branch.component';
import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { ModalConfig } from 'src/app/_metronic/partials';
import { TranslationService } from 'src/app/modules/i18n';
import { HttpHelperService } from '../../../Services/http-helper.service';
import { Branches } from '../../../Services/global-end-point.service';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent {

  page:number=1;
  pageSize:number=20;
  totalCount:number=0;
  
  branchData:any=[] ;
    constructor(
      private httpHelper: HttpHelperService,
      private translationService: TranslationService,
      private cdr: ChangeDetectorRef
  
    ) { 
    }
  
    ngOnInit(){
      this.getBranches();
    }
checkLang() {
return this.translationService.getSelectedLanguage() == 'ar';
}

selectLanguage() {
const currentLang = this.translationService.getSelectedLanguage();
const newLang = currentLang === 'en' ? 'ar' : 'en';
this.translationService.setLanguage(newLang);
}

addBranchConfig: ModalConfig = {
  modalTitle: 'حذف',
  dismissButtonLabel: 'حذف',
  closeButtonLabel: 'الغاء'
};

@ViewChild('modalAddBranch') private modalAddBranchComponent: AddBranchComponent;

async addBranch() {
  // event.stopPropagation();
  return await this.modalAddBranchComponent.open();
}

getBranches(){
  console.log(123456789 )

  let data = {
  
    page : this.page,
    pagesize:this.pageSize,


  }
  this.httpHelper.Get(Branches.getBranches , data).subscribe({
    next: (response: any) => {
      this.branchData = response.result.data;
     this.pageSize=response.result.pagesize;
     this.totalCount=response.result.count;
      this.cdr.detectChanges();
      console.log(this.branchData )
    },
    error: () => {
    },
  })
}
onChangePage(pageNumber: any): void {
  this.page=pageNumber;
  this.getBranches();
}


}
