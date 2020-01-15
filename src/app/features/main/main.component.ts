import { Component, OnInit } from '@angular/core';
import { SubradditService } from 'src/app/core/subraddit.service';
import { Post } from 'src/app/shared/models/post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  posts: Observable<Post[]>

  constructor(
    private subradditService: SubradditService
  ) { }

  ngOnInit() {
    this.posts = this.subradditService.getAllPosts();
  }

}
