import { Component, ViewChild, TemplateRef, Input } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfig } from 'src/app/_metronic/partials';
import { TranslationService } from 'src/app/modules/i18n';
import { AddReasonsComponent } from '../../../modals/add-reasons/add-reasons.component';

@Component({
  selector: 'app-reasons',
  templateUrl: './reasons.component.html',
  styleUrls: ['./reasons.component.scss']
})
export class ReasonsComponent {
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

  @ViewChild('modalAddReasons') private modalReasonComponent: AddReasonsComponent;

  async openModalReason() {
    // event.stopPropagation();
    return await this.modalReasonComponent.open();
  }

}
