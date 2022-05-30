import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  urlPath = "http://dashboard.roshetah.com"
  constructor(private http:HttpClient) { }

  getImages():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/photos")
  }

  signUp(obj:any):Observable<any>{
    return this.http.post(`${this.urlPath}/api/auth/signUp`, obj )
  }
}
