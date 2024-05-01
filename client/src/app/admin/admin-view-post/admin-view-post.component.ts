import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';
import { UpdatePostRequest } from '../../models/update-post.model';

@Component({
  selector: 'app-admin-view-post',
  templateUrl: './admin-view-post.component.html',
  styleUrl: './admin-view-post.component.css'
})
export class AdminViewPostComponent {
  constructor(private route: ActivatedRoute, private postsService: PostsService) { }
  post: Post | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');
        if(id){
          this.postsService.getPostById(id)
          .subscribe(
            response => {
              this.post = response;
            }
          )
        }
      }
    );
  }

  onSubmit(): void {
    const updatePostRequest: UpdatePostRequest = {
      author: this.post?.author,
      content: this.post?.content,
      featuredImageUrl: this.post?.featuredImageUrl,
      publishDate: this.post?.publishDate,
      updateDate: this.post?.updateDate,
      isVisible: this.post?.isVisible,
      summary: this.post?.summary,
      title: this.post?.title,
      urlHandle: this.post?.urlHandle
    }

    this.postsService.updatePost(this.post?.id, updatePostRequest)
    .subscribe(
      response => {
        alert("Success");
      }
    );
  }

  deletePost(): void {
    this.postsService.deletePost(this.post?.id)
    .subscribe(
      response => {
        alert('Deleted successfully');
      }
    );
  }
}
