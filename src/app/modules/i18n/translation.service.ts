// Localization is based on '@ngx-translate/core';
// Please be familiar with official documentations first => https://github.com/ngx-translate/core

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
  // Private properties
  private langIds: any = [];

  constructor(private translate: TranslateService) {
    // add new langIds to the list
    this.translate.addLangs(['en']);

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');
  }

  loadTranslations(...args: Locale[]): void {
    const locales = [...args];

    locales.forEach((locale) => {
      // use setTranslation() with the third argument set to true
      // to append translations instead of replacing them
      this.translate.setTranslation(locale.lang, locale.data, true);
      this.langIds.push(locale.lang);
    });

    // add new languages to the list
    this.translate.addLangs(this.langIds);
    this.translate.use(this.getSelectedLanguage());
  }

  setLanguage(lang: string) {
    if (lang) {
      this.translate.use(this.translate.getDefaultLang());
      this.translate.use(lang);
      localStorage.setItem(LOCALIZATION_LOCAL_STORAGE_KEY, lang);

      this.changeDirection(lang)
    }
  }

  /**
   * Returns selected language
   */
  getSelectedLanguage(): any {
    const lang = localStorage.getItem(LOCALIZATION_LOCAL_STORAGE_KEY) ||
    this.translate.getDefaultLang()
    this.changeDirection(lang);

    return (
      localStorage.getItem(LOCALIZATION_LOCAL_STORAGE_KEY) ||
      this.translate.getDefaultLang()
    );
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
}
