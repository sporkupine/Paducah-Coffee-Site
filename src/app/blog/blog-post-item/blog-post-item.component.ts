import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../blog-post.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-post-item',
  templateUrl: './blog-post-item.component.html',
  styleUrls: ['./blog-post-item.component.css']
})
export class BlogPostItemComponent implements OnInit {
  @Input() blogPost: BlogPost;
  blogPosts: BlogPost[] = [];
  constructor(private blogService: BlogService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this function may be unnecessary now
    //this.blogPosts = this.blogService.getBlogPosts();

    //"active blog post" here? to tell the DOM which/what to display?
  }
}
