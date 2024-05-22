import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntypedFormGroup, UntypedFormControl, Validators, UntypedFormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { AuthService } from './services/auth.service';
import { Observable, Subscription, first } from 'rxjs';
import { UserModel } from './models/user.model';
import { TranslationService } from '../i18n';


// const BODY_CLASSES = ['bgi-size-cover', 'bgi-position-center', 'bgi-no-repeat'];

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '<body[root]>',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
  today: Date = new Date();
  error: string = '';
  spinner: boolean = false;
  loginButton:boolean=false;
  isLoading$: Observable<boolean>;
  hasError: boolean;
  empty: boolean;
  returnUrl: string;
  language: LanguageFlag;
  langs = languages;


  loginForm = new UntypedFormGroup({

    email: new UntypedFormControl(null, [Validators.email, Validators.required]),
    password: new UntypedFormControl(null, [Validators.required,]),

  })

  constructor(private route: ActivatedRoute,private translationService: TranslationService, private _AuthService: AuthService, private _Router: Router, private _Location: Location, private _FormBuilder: UntypedFormBuilder, private _fb: UntypedFormBuilder) {
    this.spinner = false;

  }
  
  get f() {
    return this.loginForm.controls;
  }
  
  submitForm(): void {
   
    if(this.loginForm.value.email == "" || this.loginForm.value.password ==""){
      this.empty = true;
      this.hasError = false;
      // (document.querySelector('.error-2')as HTMLElement).style.display = "none";
    }else if (this.loginForm.value.email == 'ahmed@vision-soft.com' && this.loginForm.value.password == "@@123123") {
     localStorage.setItem('loggedin', 'true');
    //  this.spinner = true;
    this.empty = false;
    this.hasError = false;
    // (document.querySelector('.error-2')as HTMLElement).style.display = "none";

      this._AuthService.isLogin.next(true)
      this.submit()
    }
    else {
        // (document.querySelector('.error-2')as HTMLElement).style.display = "flex";
        this.empty = false;
        this.hasError = true;

    }
  }
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  // Use account admin@demo.com and password demo to continue.

  submit() {
    const loginSubscr = this._AuthService
      .login("admin@demo.com", "demo")
      .pipe(first())
      .subscribe((user: UserModel | undefined) => {
        if (user) {
          // this.translationService.setLanguage("Arabic");
          this.selectLanguage("ar")
          this._Router.navigate([this.returnUrl]);
        } else {
          this.hasError = true;
        }
      });
    this.unsubscribe.push(loginSubscr);
  }


  selectLanguage(lang: string) {
    this.translationService.setLanguage(lang);
    this.setLanguage(lang);
    // document.location.reload();
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

  ngOnInit(): void {
    this.returnUrl =
    this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
    this.setLanguage(this.translationService.getSelectedLanguage());

    // BODY_CLASSES.forEach((c) => document.body.classList.add(c));
  }

  ngOnDestroy() {
    // BODY_CLASSES.forEach((c) => document.body.classList.remove(c));
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
    lang: 'zh',
    name: 'Mandarin',
    flag: './assets/media/flags/china.svg',
  },
  {
    lang: 'es',
    name: 'Spanish',
    flag: './assets/media/flags/spain.svg',
  },
  {
    lang: 'ja',
    name: 'Japanese',
    flag: './assets/media/flags/japan.svg',
  },
  {
    lang: 'de',
    name: 'German',
    flag: './assets/media/flags/germany.svg',
  },
  {
    lang: 'fr',
    name: 'French',
    flag: './assets/media/flags/france.svg',
  },
  {
    lang: 'ar',
    name: 'Arabic',
    flag: './assets/media/flags/egypt.svg',
  },
];
