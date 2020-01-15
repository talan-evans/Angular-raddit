import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';
import { SubradditService } from 'src/app/core/subraddit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subraddit',
  templateUrl: './subraddit.component.html',
  styleUrls: ['./subraddit.component.scss']
})
export class SubradditComponent implements OnInit {

  posts: Observable<Post[]>

  constructor(
    private subradditService: SubradditService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      let subraddit = paramMap.get('subraddit');
      this.posts = this.subradditService.getAllPostsBySubraddit(subraddit);
    })
  }

}
