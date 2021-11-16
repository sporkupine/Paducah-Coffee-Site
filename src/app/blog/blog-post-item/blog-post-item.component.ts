import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogPost } from '../blog-post.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-post-item',
  templateUrl: './blog-post-item.component.html',
  styleUrls: ['./blog-post-item.component.css'],
})
export class BlogPostItemComponent implements OnInit {
  id: number;
  @Input() blogPost: BlogPost;
  activePost: BlogPost;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.activePost = this.blogService.getPost(this.id);
  }
}
