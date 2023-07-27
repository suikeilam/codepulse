import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';
import { BlogPost } from '../models/blog-post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {

  constructor(private blogPostService: BlogPostService,
              private router: Router) {
  }

  //blogPosts?: BlogPost[];
  blogPosts$?: Observable<BlogPost[]>;

  ngOnInit(): void {

    this.blogPosts$ = this.blogPostService.getAllBlogPosts();

    // this.blogPostService.getAllBlogPosts()
    //   .subscribe({
    //     next: (response) => {
    //       this.blogPosts = response;
    //     },
    //     error: (errorResponse) => {
    //     }
    //   })
  }

}
