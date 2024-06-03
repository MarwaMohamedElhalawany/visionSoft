import { Component, ViewChild, TemplateRef, Input } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfig } from 'src/app/_metronic/partials';
import { TranslationService } from 'src/app/modules/i18n';

@Component({
  selector: 'app-reasons',
  templateUrl: './reasons.component.html',
  styleUrls: ['./reasons.component.scss']
})
export class ReasonsComponent {
  @ViewChild('modalAddReasons') private modalContent: TemplateRef<ReasonsComponent>;
  private modalRef: NgbModalRef;
  @Input() modalConfig: any;




  constructor(
    private modalService: NgbModal,
    private translationService: TranslationService
  ) { }

  checkLang() {
    return this.translationService.getSelectedLanguage() === 'ar';
  }

  selectLanguage() {
    const currentLang = this.translationService.getSelectedLanguage();
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    this.translationService.setLanguage(newLang);
  }

  addReasonConfig: ModalConfig = {
    modalTitle: 'حذف',
    dismissButtonLabel: 'حذف',
    closeButtonLabel: 'الغاء'
  };

  async open(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.modalRef = this.modalService.open(this.modalContent, { centered: true, backdrop: 'static', scrollable: true });
      this.modalRef.result.then(resolve, resolve);
    });
  }

  async close(): Promise<void> {
    if (
      this.addReasonConfig.shouldClose === undefined ||
      (await this.addReasonConfig.shouldClose())
    ) {
      const result =
        this.addReasonConfig.onClose === undefined ||
        (await this.addReasonConfig.onClose());
      this.modalRef.close(result);
    }
  }

  async dismiss(): Promise<void> {
    if (this.addReasonConfig.disableDismissButton !== undefined) {
      return;
    }

    if (
      this.addReasonConfig.shouldDismiss === undefined ||
      (await this.addReasonConfig.shouldDismiss())
    ) {
      const result =
        this.addReasonConfig.onDismiss === undefined ||
        (await this.addReasonConfig.onDismiss());
      this.modalRef.dismiss(result);
    }
  }

  async openModalReasons() {
    return await this.open();
  }
}
