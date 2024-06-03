import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { AddAreaComponent } from '../../../modals/add-area/add-area/add-area.component';
import { ModalConfig } from 'src/app/_metronic/partials';
import { TranslationService } from 'src/app/modules/i18n';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent {
  constructor(
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef

  ) { 
  }
  checkLang() {
    return this.translationService.getSelectedLanguage() == 'ar';
    }
    
    selectLanguage() {
    const currentLang = this.translationService.getSelectedLanguage();
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    this.translationService.setLanguage(newLang);
    }
    
    addAreaConfig: ModalConfig = {
      modalTitle: 'حذف',
      dismissButtonLabel: 'حذف',
      closeButtonLabel: 'الغاء'
    };
    
    @ViewChild('modalAddArea') private modalAddAreaComponent: AddAreaComponent;
    
    async addArea() {
      // event.stopPropagation();
      return await this.modalAddAreaComponent.open();
    }
    
}
