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


@NgModule({
  declarations: [LoginComponent, MainComponent, SubradditComponent, PostComponent, CommentComponent, PostSummaryComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    LoginComponent, MainComponent, SubradditComponent
  ]
})
export class FeaturesModule { }
