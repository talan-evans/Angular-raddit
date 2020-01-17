import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';
import { SubradditService } from 'src/app/core/subraddit.service';

@Component({
  selector: 'app-post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.scss']
})
export class PostSummaryComponent implements OnInit {

  @Input() post: Post;

  constructor(
    private subradditService: SubradditService
  ) { }

  ngOnInit() {
  }

  count(): number {
    return this.post.likes - this.post.dislikes;
  }

  likePost() {
    this.subradditService.likePost(this.post.id).subscribe(data => {
      this.post = data;
    })
  }

  dislikePost() {
    this.subradditService.dislikePost(this.post.id).subscribe(data => {
      this.post = data;
    })
  }

}
