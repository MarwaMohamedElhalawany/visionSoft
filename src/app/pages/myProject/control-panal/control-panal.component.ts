import { Component } from '@angular/core';
import { TranslationService } from 'src/app/modules/i18n';

@Component({
  selector: 'app-control-panal',
  templateUrl: './control-panal.component.html',
  styleUrls: ['./control-panal.component.scss']
})
export class ControlPanalComponent {
  language: LanguageFlag;
  langs = languages;
  constructor(
   
    private translationService: TranslationService,
  ){}
  checkLang() {
    return this.translationService.getSelectedLanguage() == 'ar';
  }

  selectLanguage() {
    const currentLang = this.translationService.getSelectedLanguage();
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    this.translationService.setLanguage(newLang);
    this.setLanguage(newLang);
  }

  setLanguage(lang: string) {
    this.langs.forEach((language: LanguageFlag) => {
      if (language.lang === lang) {
        language.active = true;
        this.language = language;
      } else {
        language.active = false;
      }
    });
  }
}
interface LanguageFlag {
  lang: string;
  name: string;
  flag: string;
  active?: boolean;
}

const languages = [
  {
    lang: 'en',
    name: 'English',
    flag: './assets/media/flags/united-states.svg',
  },
  {
    lang: 'ar',
    name: 'Arabic',
    flag: './assets/media/flags/egypt.svg',
  },
];