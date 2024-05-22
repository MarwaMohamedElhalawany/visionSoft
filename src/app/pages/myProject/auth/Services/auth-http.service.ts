import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {

  apiUrl = environment?.apiUrl;
  

  constructor(private _HttpClient: HttpClient,
    private router: Router,
  ) { }

  login(endPoint: string, modal: any): Observable<any> {
    return this._HttpClient.post(endPoint, modal)
  }

  // login(data: any): Observable<any> {
  //   console.log(this.apiUrl + roots?.auth?.login);
  //   return this.http?.post<any>(this.apiUrl + roots?.auth?.login, data);
  // }

  
  Post(endPoint: string, modal: any, QueryParams?: any): Observable<any> {
    const params = this.convrtToParams(QueryParams);
    return this._HttpClient.post('https://shippingapi.vision-soft.org/api/Login/userlogin', modal, { params: params, });
  }

  private convrtToParams(QueryParams: any) {
    let params = new HttpParams()

    for (const key in QueryParams) {
      if (Array.isArray(QueryParams[key])) {
        const array = QueryParams[key];
        for (let index = 0; index < array.length; index++) {
          params = params.append(key, array[index]);
        }
      }
      else
        params = params.set(key, QueryParams[key]);
    }
    return params;
  }
}