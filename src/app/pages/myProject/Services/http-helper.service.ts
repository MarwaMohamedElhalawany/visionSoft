import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from './global-end-point.service';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  constructor(private _HttpClient: HttpClient,) {
  }

  Get(endPoint: string, QueryParams?: any): Observable<any> {
    if (QueryParams != undefined) {
      const params = this.convrtToParams(QueryParams);
      return this._HttpClient.get(baseUrl + endPoint, { params: params});
    }
    return this._HttpClient.get(baseUrl + endPoint);
  }

  Post(endPoint: string, modal: any, QueryParams?: any): Observable<any> {
    if (QueryParams !== undefined) {
      const params = this.convrtToParams(QueryParams);
      return this._HttpClient.post(baseUrl + endPoint, modal, { params: params});
    }
    return this._HttpClient.post(baseUrl + endPoint, modal);
  }

  Put(endPoint: string, modal: any, QueryParams?: any): Observable<any> {
    if (QueryParams !== undefined) {
      const params = this.convrtToParams(QueryParams);
      return this._HttpClient.put(baseUrl + endPoint, modal, { params: params});
    }
    return this._HttpClient.put(baseUrl + endPoint, modal);
  }

  Delete(endPoint: string, QueryParams?: any): Observable<any> {
    if (QueryParams !== undefined) {
      const params = this.convrtToParams(QueryParams);
      return this._HttpClient.delete(baseUrl + endPoint, { params: params});
    }
    return this._HttpClient.delete(baseUrl + endPoint);
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
