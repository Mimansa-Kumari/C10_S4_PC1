import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
  URL:string="http://localhost:3000/blogs";
  constructor(private http : HttpClient) { }

  getAllBlogs():Observable<Array<Blog>>
  {
    return this.http.get<Array<Blog>>(this.URL);
  }
  addBlogs(data:any):Observable<Blog>
  {
    return this.http.post(this.URL,data);
  }
}
