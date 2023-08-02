import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';
import { BlogServiceService } from '../services/blog-service.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent{
  blog: Blog = {};
  constructor(private save:BlogServiceService) {}

  saveBlog() {
    this.save.addBlogs(this.blog).subscribe({
      next: data => {
        alert(`Blog added successfully`);
      },
      error: e => {
        alert("Failed to Fetch Blogs due to Network Error!!!");
      }
    });

  }
}
