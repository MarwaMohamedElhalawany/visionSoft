import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { TranslationService } from 'src/app/modules/i18n';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  // language: LanguageFlag;
  // langs = languages;
  defaultAuth: any = {
    user_Name: "",//"Super@Admin.com",
    user_Pass: "",//"Aa000000."
  
  }
  loginForm: FormGroup;
  hasError: boolean;
  hasErrorEmployee: boolean;
  returnUrl: string;
  isLoading$: Observable<boolean>;

  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private translationService: TranslationService,
  ) {
    this.isLoading$ = this.authService.isLoading$;
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.initForm();
    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
  }

  
  get f() {
    return this.loginForm.controls;
  }

  
  initForm() {
    this.loginForm = this.fb.group({
      user_Name: [
        this.defaultAuth.user_Name,
        Validators.compose([
          Validators.required,
         
        ]),
      ],
      user_Pass: [
        this.defaultAuth.user_Pass,
        Validators.compose([
          Validators.required,
          
        ]),
      ],
    });
  
  }

  submit() {
    this.hasError = false;
    const userData = {
      user_Name: this.f.user_Name.value,
      user_Pass: this.f.user_Pass.value
    }

    const loginSubscr = this.authService
      .login(this.f.user_Name.value, this.f.user_Pass.value)
      .subscribe((user: any | undefined) => {
        if (user) {
          this.router.navigate([this.returnUrl]);
        } else {
          this.hasError = true;
        }
      });
    this.unsubscribe.push(loginSubscr);
  }

 

  // checkLang() {
  //   return this.translationService.getSelectedLanguage() == 'ar';
  // }

  // selectLanguage() {
  //   const currentLang = this.translationService.getSelectedLanguage();
  //   const newLang = currentLang === 'en' ? 'ar' : 'en';
  //   this.translationService.setLanguage(newLang);
  //   this.setLanguage(newLang);
  // }

  // setLanguage(lang: string) {
  //   this.langs.forEach((language: LanguageFlag) => {
  //     if (language.lang === lang) {
  //       language.active = true;
  //       this.language = language;
  //     } else {
  //       language.active = false;
  //     }
  //   });
  // }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

  currentLang:string;

  getSelectedLanguage(){
    this.currentLang = this.translationService.getSelectedLanguage().toUpperCase();
  }

  
}
 
// interface LanguageFlag {
//   lang: string;
//   name: string;
//   flag: string;
//   active?: boolean;
// }

// const languages = [
//   {
//     lang: 'en',
//     name: 'English',
//     flag: './assets/media/flags/united-states.svg',
//   },
//   {
//     lang: 'ar',
//     name: 'Arabic',
//     flag: './assets/media/flags/egypt.svg',
//   },
// ];
