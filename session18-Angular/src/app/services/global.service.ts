import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public navFlag:boolean= false
  public imgUrl = "http://localhost:3000/"
  public isLogIn : boolean = false
  constructor(private http : HttpClient) { }

  login(obj:any) : Observable<any>{
    return this.http.post("http://dashboard.roshetah.com/api/auth/login" , obj )
  }
  loadRoles():Observable<any>{
    return this.http.get('http://dashboard.roshetah.com/api/auth/loadRoles/1')
  }
}
