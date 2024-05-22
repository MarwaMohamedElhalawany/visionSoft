import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, UntypedFormBuilder } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../modules/auth';


@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss']
})
export class MyTestComponent {
  error: string = '';
  spinner: boolean = false;
  loginButton:boolean=false;

  loginForm = new UntypedFormGroup({

    email: new UntypedFormControl(null, [Validators.email, Validators.required]),
    password: new UntypedFormControl(null, [Validators.required,]),

  })



  constructor(private _AuthService: AuthService, private _Router: Router, private _Location: Location, private _FormBuilder: UntypedFormBuilder, private _fb: UntypedFormBuilder) {
    this.spinner = false;

  }

 //submitloginForm(loginForm: FormGroup) {
   // this._Router.navigate(['/users']);
    //  this._AuthService.login(loginForm.value).subscribe((response)=>{

    //   if(response.message=='success')
    //   {
    //     this.spinner = true;
    //     localStorage.setItem('userToken', response.token);
    //     this._AuthService.saveCurrentUser();

    //       this._Router.navigate(['/users'])
    //       this.spinner = false;

    //   }
    //   else
    //   {

    // this._Router.navigate(['/users'])
    //     this.error = response.message
    //   }
    //  })
  //}


  submitForm(): void {
   
    if (this.loginForm.value.email == 'baderalmosmi@haatcard.com' && this.loginForm.value.password == "@bader511") {
     localStorage.setItem('loggedin', 'true');
     this.spinner = true;
      
      // this._AuthService.isLogin.next(true)
      this._Router.navigate(['/users'])
    }
    else {
        (document.querySelector('.error-2')as HTMLElement).style.display = "flex";

    }
  }
  ngOnInit(): void {

  
  }

}
