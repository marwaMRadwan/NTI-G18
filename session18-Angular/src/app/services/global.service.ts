import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public navFlag:boolean= false
  public imgUrl = "http://localhost:3000/"
  public urlPath = "http://dashboard.roshetah.com/api/auth/"
  public isLogIn : boolean = false
  constructor(private http : HttpClient) { }

  login(obj:any) : Observable<any>{
    return this.http.post(`${this.urlPath}login` , obj )
  }
  loadRoles():Observable<any>{
    return this.http.get(`${this.urlPath}loadRoles/1`)
  }
  uploadImg(obj:any):Observable<any>{
    return this.http.post(`${this.urlPath}StoreAccountImages` , obj)
  }

}
