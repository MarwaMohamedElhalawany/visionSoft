import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClipboardModule } from 'ngx-clipboard';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './modules/auth/services/auth.service';
import { environment } from 'src/environments/environment';
// #fake-start#
import { FakeAPIService } from './_fake/fake-api.service';
import { ComponentnameComponent } from './componentname/componentname.component';
import { MyTestComponent } from './my-test/my-test.component';
import { VisionUsersComponent } from './pages/vision-users/vision-users.component';
import { SharedModule } from "./_metronic/shared/shared.module";
// #fake-end#

import { ButtonModule } from 'primeng/button'; // Import any required PrimeNG modules
import { TreeModule } from 'primeng/tree';
import { ToastrModule } from 'ngx-toastr';
// import { AllAccountsComponent } from './pages/myProject/Account_management/accounts-data/all-accounts/all-accounts.component';

function appInitializer(authService: AuthService) {
  return () => {
    return new Promise((resolve) => {
      //@ts-ignore
      authService.getUserByToken().subscribe().add(resolve);
    });
  };
}

@NgModule({
    declarations: [AppComponent, ComponentnameComponent, MyTestComponent, VisionUsersComponent,   ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: appInitializer,
            multi: true,
            deps: [AuthService],
        },
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        HttpClientModule,
        ClipboardModule,
        ButtonModule,
        TreeModule,
        ToastrModule.forRoot({
          positionClass: 'toast-bottom-center', // تحديد موقع التوستر
          toastClass: 'ngx-toastr custom-toast', // تعيين فئة CSS مخصصة
        }), 
        environment.isMockEnabled
            ? HttpClientInMemoryWebApiModule.forRoot(FakeAPIService, {
                passThruUnknownUrl: true,
                dataEncapsulation: false,
            })
            : [],
        // #fake-end#
        AppRoutingModule,
        InlineSVGModule.forRoot(),
        NgbModule,
        SharedModule
    ]
})
export class AppModule {}
