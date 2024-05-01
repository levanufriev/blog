import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { AddPostRequest } from '../../models/add-post.model';

@Component({
  selector: 'app-admin-add-post',
  templateUrl: './admin-add-post.component.html',
  styleUrl: './admin-add-post.component.css'
})
export class AdminAddPostComponent {
  constructor(private postsService: PostsService) { }

  post: AddPostRequest = {
    author: '',
    content: '',
    featuredImageUrl: '',
    publishDate: '',
    updateDate: '',
    summary: '',
    title: '',
    urlHandle: '',
    isVisible: true
  }

  ngOnInit(): void {
  }

  onSubmit() : void {
    this.postsService.addPost(this.post)
    .subscribe(
      response => {
        alert('Success');
      }
    );
  }
}
