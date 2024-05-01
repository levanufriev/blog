import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  constructor(private postsService: PostsService) { }

  posts: Post[] = [];

  ngOnInit(): void {
    this.postsService.getAllPosts()
    .subscribe(
      response => {
        this.posts=response;
      }
    );
  }
}
