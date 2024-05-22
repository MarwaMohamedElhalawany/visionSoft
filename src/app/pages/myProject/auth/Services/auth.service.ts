import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription, catchError, finalize, first, map, of, switchMap } from 'rxjs';
import { AuthHttpService } from './auth-http.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private unsubscribe: Subscription[] = [];
  currentUser$: Observable<any>;
  isLoading$: Observable<boolean>;
  currentUserSubject: BehaviorSubject<any>;
  isLoadingSubject: BehaviorSubject<boolean>;
  authLocalStorageToken: any = 'user';
  
  constructor(private authHTTPService: AuthHttpService, private router: Router) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.currentUserSubject = new BehaviorSubject<any>(undefined);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }
  
  get currentUserValue(): any {
    return this.currentUserSubject.value;
  }
  
  set currentUserValue(user: any) {
    this.currentUserSubject.next(user);
  }
  
  login(userName: string, password: string): Observable<any> {
    this.isLoadingSubject.next(true);
    const userData = {
      user_Name: userName,
      user_Pass: password,
  
    }
    return this.authHTTPService.login('https://shippingapi.vision-soft.org/api/Login/userlogin', userData).pipe(
  
      map((auth: any) => {
        const result = this.setAuthFromLocalStorage(auth);
        this.currentUserSubject.next(auth);
        return result;
      }),
      catchError((err) => {
        console.error('err', err);
        return of(undefined);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }
  
  
  
  
  logout() {
    // localStorage.clear();
    localStorage.removeItem(this.authLocalStorageToken);
    this.router.navigate(['/auth/login']);
  }
  
  
  private setAuthFromLocalStorage(auth: any): boolean {
    // store auth authToken/refreshToken/epiresIn in local storage to keep user logged in between page refreshes
    if (auth) {
      localStorage.setItem(this.authLocalStorageToken, JSON.stringify(auth));
      return true;
    }
    return false;
  }
  
  getAuthFromLocalStorage(): any | undefined {
    try {
      const lsValue = localStorage.getItem(this.authLocalStorageToken);
      if (!lsValue) {
        return undefined;
      }
  
      const authData = JSON.parse(lsValue);
      this.currentUserSubject.next(authData);
      return authData;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
  
  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
  }

 

 
 