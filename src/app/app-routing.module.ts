import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { SubradditComponent } from './features/subraddit/subraddit.component';
import { MainComponent } from './features/main/main.component';


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
