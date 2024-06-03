import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../Services/auth.service';
import { TranslationService } from 'src/app/modules/i18n';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  errorMessage: string;
  defaultAuth: any = {
    user_Name: "",
    user_Pass: "",
  };
  loginForm: FormGroup;
  hasError: boolean;
  returnUrl: string;
  isLoading$: Observable<boolean>;

  private unsubscribe: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private translationService: TranslationService, // Correct property name
    private toastr: ToastrService
  ) {
    this.isLoading$ = this.authService.isLoading$;
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.initForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
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
  };

  const loginSubscr = this.authService
    .login(this.f.user_Name.value, this.f.user_Pass.value)
    .subscribe(
      (user: any | undefined) => {
        if (user) {
          this.router.navigate([this.returnUrl]);
          this.toastr.success('Login successful');
        } else {
          this.hasError = true;
          const errorMessage = this.translationService.translateKey('AUTH.LOGIN.ERROR');
          this.errorMessage = errorMessage; // Set error message
          this.toastr.error(errorMessage , '', { toastClass: 'toast-error' });
        }
      },
      error => {
        this.hasError = true;
        const errorMessage = this.translationService.translateKey('AUTH.LOGIN.ERROR');
        this.errorMessage = errorMessage; // Set error message
        this.toastr.error(error.error.message || errorMessage);
      }
    );
  this.unsubscribe.push(loginSubscr);
}

  
  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
