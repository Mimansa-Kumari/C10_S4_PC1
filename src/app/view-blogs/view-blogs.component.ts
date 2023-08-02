import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Blog } from '../models/blog';
import { BlogServiceService } from '../services/blog-service.service';

@Component({
  selector: 'app-view-blogs',
  templateUrl: './view-blogs.component.html',
  styleUrls: ['./view-blogs.component.css']
})
export class ViewBlogsComponent implements OnInit {

  blogs: Blog[] = [];

  constructor(private blog:BlogServiceService) { }

  ngOnInit(): void {
    this.blog.getAllBlogs().subscribe(data=>this.blogs=data);
  }

}
