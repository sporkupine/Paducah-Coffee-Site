import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blogPosts: BlogPost[] = [
    {
      title: 'Sample Blog Post',
      date: 'September 24, 2020',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consequatur tempore illum necessitatibus cumque obcaecati assumenda autem nostrum provident labore unde eum sit odit, vitae dolor totam, sequi incidunt corporis iure tenetur nisi dicta dolorum. Ratione ad odit, temporibus eum, quaerat eius explicabo nesciunt quisquam animi, rerum excepturi ipsum tempore?',
      id: 1,
    },
    {
      title: 'Sample Blog Post 2',
      date: 'October 31, 2020',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consequatur tempore illum necessitatibus cumque obcaecati assumenda autem nostrum provident labore unde eum sit odit, vitae dolor totam, sequi incidunt corporis iure tenetur nisi dicta dolorum. Ratione ad odit, temporibus eum, quaerat eius explicabo nesciunt quisquam animi, rerum excepturi ipsum tempore?',
      id: 2,
    },
    {
      title: 'Sample Blog Post 3',
      date: 'March 23, 2021',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, similique, facilis nobis illum consequuntur voluptatibus rerum accusantium, eaque natus quibusdam a. Optio esse laudantium itaque architecto hic quibusdam repellendus ex asperiores qui temporibus, distinctio quo natus blanditiis ab nemo quia similique iure quae laborum tempora culpa odio? Dignissimos necessitatibus reprehenderit accusantium corporis fugit placeat delectus suscipit labore dolorem nesciunt amet distinctio dolorum, doloribus quidem autem soluta saepe, totam minima sequi non ex facilis tempore iure.',
      id: 3,
    },
    {
      title: 'Sample Blog Post 4',
      date: 'June 26, 2021',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero fugiat temporibus provident. Minima, quae dignissimos, mollitia qui distinctio officiis praesentium magnam sapiente cumque porro laborum sunt, culpa quaerat iusto voluptatem ducimus doloremque aperiam nihil id. Corrupti id iusto culpa quidem quibusdam. Maxime, mollitia ad. Beatae praesentium eius, cum vitae voluptate impedit officiis placeat deserunt excepturi quo hic rem nemo animi non deleniti aut debitis alias eligendi. Esse, maxime!',
      id: 4,
    },
    {
      title: 'Site Update',
      date: 'November 10, 2023',
      content:
        "Since beginning my journey as a software developer (and starting this mock-site-for-a-real-company practice project), I have gained a great deal of skill and experience. As of this post, I have a year of experience developing software professionally. In this time, I have learned that it's best not to reinvent the wheel, and that plenty of platforms give me the functionality to customize my own webstore and handle secure checkout, with options to create an account, favorite products, sign up for email lists, and everything else I wanted to do with this site. So I'll be building the actual Paducah Coffee Co. site with WordPress, and leaving the door open for a potential rebuild down the line. This site will remain in place as a coding sandbox of sorts, but it will never make the transition into being an actual ecommerce website.",
      id: 5,
    },
  ];

  getBlogPosts() {
    return this.blogPosts.slice();
  }

  getPost(id: number) {
    const post = this.blogPosts.find((p) => p.id == id);
    return post;
  }
}
