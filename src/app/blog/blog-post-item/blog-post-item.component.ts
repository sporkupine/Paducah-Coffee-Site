import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-post-item',
  templateUrl: './blog-post-item.component.html',
  styleUrls: ['./blog-post-item.component.css']
})
export class BlogPostItemComponent implements OnInit {
  @Input() blogPost: BlogPost;
  blogPosts: BlogPost[] = []
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogPosts = this.blogService.getBlogPosts();
  }

}
