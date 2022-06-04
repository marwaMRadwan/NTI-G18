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
  public roles :any
  constructor(private http : HttpClient) { }

  login(obj:any) : Observable<any>{
    return this.http.post(`${this.urlPath}login` , obj )
  }
  loadRoles(){
     this.http.get(`${this.urlPath}loadRoles/1`).subscribe(data=>{
      this.roles = data
     })
     return this.roles
  }
  // uploadImg(obj:any):Observable<any>{
  //   return this.http.post(`${this.urlPath}StoreAccountImages` , obj)
  // }


  getImages():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/photos")
  }

}