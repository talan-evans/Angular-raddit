import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.scss']
})
export class PostSummaryComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
