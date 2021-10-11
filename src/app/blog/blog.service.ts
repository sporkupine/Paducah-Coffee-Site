import { Injectable } from "@angular/core";
import { BlogPost } from "./blog-post.model";

@Injectable({
  providedIn: 'root'
})

export class BlogService {
  blogPosts: BlogPost[] = [
    {
      title: 'Sample Blog Post',
      date: 'September 24, 2020',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consequatur tempore illum necessitatibus cumque obcaecati assumenda autem nostrum provident labore unde eum sit odit, vitae dolor totam, sequi incidunt corporis iure tenetur nisi dicta dolorum. Ratione ad odit, temporibus eum, quaerat eius explicabo nesciunt quisquam animi, rerum excepturi ipsum tempore?'


    },
    {
      title: 'Sample Blog Post 2',
      date: 'October 31, 2020',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consequatur tempore illum necessitatibus cumque obcaecati assumenda autem nostrum provident labore unde eum sit odit, vitae dolor totam, sequi incidunt corporis iure tenetur nisi dicta dolorum. Ratione ad odit, temporibus eum, quaerat eius explicabo nesciunt quisquam animi, rerum excepturi ipsum tempore?'

    }
  ]

  getBlogPosts(){
    return this.blogPosts.slice();
  }

}
