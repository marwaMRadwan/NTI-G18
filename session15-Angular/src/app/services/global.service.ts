import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
 public firstName : string = "nouran"

  constructor(private http:HttpClient) { }

  getBlogs():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
  }

  getUsers():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
  getSingleBlog(id:any):Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
