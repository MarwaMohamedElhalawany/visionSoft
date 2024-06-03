import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Locale {
  lang: string;
  data: any;
}

import { locale as enLang } from './vocabs/en';
import { locale as chLang } from './vocabs/ch';
import { locale as esLang } from './vocabs/es';
import { locale as jpLang } from './vocabs/jp';
import { locale as deLang } from './vocabs/de';
import { locale as frLang } from './vocabs/fr';
import { locale as arLang } from './vocabs/ar';

const LOCALIZATION_LOCAL_STORAGE_KEY = 'language';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private langIds: any = [];

  constructor(private translateService: TranslateService) { // Rename property here
    this.translateService.addLangs(['en']);
    this.translateService.setDefaultLang('en');
  }

  loadTranslations(...args: Locale[]): void {
    const locales = [...args];
    locales.forEach((locale) => {
      this.translateService.setTranslation(locale.lang, locale.data, true);
      this.langIds.push(locale.lang);
    });
    this.translateService.addLangs(this.langIds);
    this.translateService.use(this.getSelectedLanguage());
  }

  setLanguage(lang: string) {
    if (lang) {
      this.translateService.use(this.translateService.getDefaultLang());
      this.translateService.use(lang);
      localStorage.setItem(LOCALIZATION_LOCAL_STORAGE_KEY, lang);
      this.changeDirection(lang);
    }
  }

  getSelectedLanguage(): any {
    const lang = localStorage.getItem(LOCALIZATION_LOCAL_STORAGE_KEY) || this.translateService.getDefaultLang();
    this.changeDirection(lang);
    return lang;
  }

  changeDirection(lang: any) {
    switch (lang) {
      case 'ar':
        document.dir = arLang.dir;
        break;
      case 'en':
        document.dir = enLang.dir;
        break;
      case 'fr':
        document.dir = frLang.dir;
        break;
      case 'de':
        document.dir = deLang.dir;
        break;
      case 'jp':
        document.dir = jpLang.dir;
        break;
      case 'es':
        document.dir = esLang.dir;
        break;
      case 'ch':
        document.dir = chLang.dir;
        break;
      default:
        document.dir = 'ltr';
        break;
    }
  }

  public translateKey(key: string): string { // Rename method here
    return this.translateService.instant(key);
  }
}
