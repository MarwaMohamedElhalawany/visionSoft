import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { ModalConfig } from 'src/app/_metronic/partials';
import { TranslationService } from 'src/app/modules/i18n';
@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.component.html',
  styleUrls: ['./add-area.component.scss']
})
export class AddAreaComponent {

  branchList: string[] = ['فرع جيزة', 'عمولة فرع رئيسي', '333'];
  filteredBranchList: string[] = this.branchList;
  branchControl = new FormControl('');

  @Input() public modalConfig: ModalConfig;
  @ViewChild('modal') private modalContent: TemplateRef<AddAreaComponent>;
  private modalRef: NgbModalRef;

  constructor(
    private modalService: NgbModal, 
    private translationService: TranslationService
  ) {
    this.branchControl.valueChanges.subscribe(value => {
      this.filterBranches(value || ''); // Handle null or undefined values
    });
  }
  
  filterBranches(value: string) {
    const filterValue = value.toLowerCase();
    this.filteredBranchList = this.branchList.filter(branch => branch.toLowerCase().includes(filterValue));
  }

  checkLang() {
    return this.translationService.getSelectedLanguage() === 'ar';
  }

  selectLanguage() {
    const currentLang = this.translationService.getSelectedLanguage();
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    this.translationService.setLanguage(newLang);
  }

  open(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.modalRef = this.modalService.open(this.modalContent, { centered: true, backdrop: 'static', scrollable: true });
      this.modalRef.result.then(resolve, resolve);
    });
  }

  async close(): Promise<void> {
    if (
      this.modalConfig.shouldClose === undefined ||
      (await this.modalConfig.shouldClose())
    ) {
      const result =
        this.modalConfig.onClose === undefined ||
        (await this.modalConfig.onClose());
      this.modalRef.close(result);
    }
  }

  async dismiss(): Promise<void> {
    if (this.modalConfig.disableDismissButton !== undefined) {
      return;
    }

    if (
      this.modalConfig.shouldDismiss === undefined ||
      (await this.modalConfig.shouldDismiss())
    ) {
      const result =
        this.modalConfig.onDismiss === undefined ||
        (await this.modalConfig.onDismiss());
      this.modalRef.dismiss(result);
    }
  }
}
