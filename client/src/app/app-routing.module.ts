import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import { AdminViewPostComponent } from './admin/admin-view-post/admin-view-post.component';
import { AdminAddPostComponent } from './admin/admin-add-post/admin-add-post.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'admin/posts', component: AdminPostsComponent },
  { path: 'admin/posts/:id', component: AdminViewPostComponent },
  { path: 'admin/posts/add', component: AdminAddPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
