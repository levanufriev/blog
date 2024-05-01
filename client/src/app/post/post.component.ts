import { Component } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  post: Post | undefined;

  constructor(private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');
        if(id){
          this.postsService.getPostById(id)
          .subscribe(
            response => {
              this.post=response;
            }
          );
        }
      }
    );
  }
}
