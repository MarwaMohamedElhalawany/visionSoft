import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfig } from 'src/app/_metronic/partials';
import { TranslationService } from 'src/app/modules/i18n';

@Component({
  selector: 'app-add-reasons',
  templateUrl: './add-reasons.component.html',
  styleUrls: ['./add-reasons.component.scss']
})
export class AddReasonsComponent {
  branchList: any[] = [
    { name: 'فرع جيزة' },
    { name: 'عمولة فرع رئيسي' },
    { name: '333' },
    ];
    selectedBranch: any ;
    filteredBranchList: string[] = this.branchList;
  @Input() public modalConfig: ModalConfig;
  @ViewChild('modal') private modalContent: TemplateRef<AddReasonsComponent>;
  private modalRef: NgbModalRef;

  constructor(private modalService: NgbModal , 
              private translationService: TranslationService,
  ) { }
  checkLang() {
    return this.translationService.getSelectedLanguage() == 'ar';
  }

  selectLanguage() {
    const currentLang = this.translationService.getSelectedLanguage();
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    this.translationService.setLanguage(newLang);
  }
  open(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.modalRef = this.modalService.open(this.modalContent, { centered: true, backdrop: 'static' ,scrollable: true});
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