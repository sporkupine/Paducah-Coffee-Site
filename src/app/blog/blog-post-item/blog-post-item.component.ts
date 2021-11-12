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

    //"active blog post" here? to tell the DOM which/what to display?

    // Stuck AF on this. URL is correctly updating with the ID of the post to be loaded.
    // Sooo how do I tell the app to display the post with the corresponding ID?
    // Will rewatch Max's videos in this section and hopefully find answers there.
  }
}
