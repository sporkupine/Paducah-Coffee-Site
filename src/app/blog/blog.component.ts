import { Component, OnInit } from '@angular/core';
import { BlogPost } from './blog-post.model';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogPosts = this.blogService.getBlogPosts();
  }

}
