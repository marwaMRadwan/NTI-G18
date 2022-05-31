import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public navFlag:boolean= false
  constructor(private http : HttpClient) { }

  login(obj:any) : Observable<any>{
    return this.http.post("http://dashboard.roshetah.com/api/auth/login" , obj )
  }
}
