import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SubradditComponent } from './subraddit/subraddit.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { PostSummaryComponent } from './post-summary/post-summary.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreatePostComponent } from './create-post/create-post.component';


@NgModule({
  declarations: [LoginComponent, MainComponent, SubradditComponent, PostComponent, CommentComponent, PostSummaryComponent, CreatePostComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    LoginComponent, MainComponent, SubradditComponent
  ]
})
export class FeaturesModule { }
