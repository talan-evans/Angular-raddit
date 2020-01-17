import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post.model';
import { SubradditService } from 'src/app/core/subraddit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  subraddit = '';
  title = '';
  body = '';

  constructor(
    private subradditService: SubradditService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  create() {
    const user = localStorage.getItem('user');
    const newPost: Post = {
      id: 0,
      subraddit: this.subraddit,
      title: this.title,
      body: this.body,
      author: user,
      likes: 0, 
      dislikes: 0,
      interaction: 0,
      createTimestamp: new Date(),
      comments: []
    }

    this.subradditService.createNewPost(newPost).subscribe(data => {
      this.router.navigate(["/r/" + this.subraddit]);
    })
  }

}
