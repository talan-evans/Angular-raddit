import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { SubradditComponent } from './features/subraddit/subraddit.component';
import { MainComponent } from './features/main/main.component';
import { CreatePostComponent } from './features/create-post/create-post.component';
import { PostComponent } from './features/post/post.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'r/:subraddit',
    component: SubradditComponent
  },
  {
    path: 'p/:id',
    component: PostComponent
  },
  {
    path: 'create',
    component: CreatePostComponent
  },
  {
    path: '',
    component: MainComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
