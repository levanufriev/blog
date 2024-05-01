import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrl: './admin-posts.component.css'
})
export class AdminPostsComponent {
  constructor(private postsService: PostsService) { }

  posts: Post[] = [];

  ngOnInit(): void {
      this.postsService.getAllPosts().subscribe(response => {
        this.posts=response;
      });
  }
}
