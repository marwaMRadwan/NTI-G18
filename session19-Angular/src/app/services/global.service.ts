import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  urlPath="http://dashboard.roshetah.com/api/auth/"
  constructor(private http : HttpClient) { }



  loadRoles():Observable<any>{
    return this.http.get(`${this.urlPath}loadRoles/1`)
  } 
  
  loadProviders(obj:any , pageNum : any):Observable<any>{
    return this.http.post(`${this.urlPath}LoadProvidersBySlug/1/${pageNum}/10` , obj )
  }
}
