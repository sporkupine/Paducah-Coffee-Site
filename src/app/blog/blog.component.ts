import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from './blog-post.model';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  activePost: BlogPost;

  constructor(private blogService: BlogService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.blogPosts = this.blogService.getBlogPosts();
  }

  onBlogPostNav(post) {
    this.router.navigate([post.id], {relativeTo: this.route});
    this.activePost = post;
  }

}
