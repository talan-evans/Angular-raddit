import { Injectable } from '@angular/core';
import { POSTS, COMMENTS } from '../../../data';
import { Observable, of } from 'rxjs';
import { Post } from '../shared/models/post.model';
import { Comment } from '../shared/models/comment.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubradditService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.ALL_SUBRADDIT_URL);
    // return of(POSTS);
  }

  getPostById(): Observable<Post> {
    return this.http.get<Post>(environment.POST_BY_ID_URL);
  }

  getAllPostsBySubraddit(subraddit: string): Observable<Post[]> {
    return this.http.get<Post[]>(environment.SUBRADDIT_URL + subraddit);
    // return of(POSTS.filter(p => p.subraddit === subraddit));
  }

  createNewPost(post: Post): Observable<Post> {
    return this.http.post<Post>(environment.CREATE_POST_URL, post);
    // post.id = POSTS.length;
    // POSTS.push(post);
    // return of(post);
  }

  likePost(id: number): Observable<Post> {
    return this.http.post<Post>(environment.LIKE_POST_URL + id, null);
    // let post = POSTS.find(p => p.id === id);
    // post.likes++;
    // post.interaction = 1;
    // return of(post);
  }

  dislikePost(id: number): Observable<Post> {
    return this.http.post<Post>(environment.DISLIKE_POST_URL + id, null);
    // let post = POSTS.find(p => p.id === id);
    // post.dislikes++;
    // post.interaction = -1;
    // return of(post);
  }

  createComment(comment: Comment): Observable<Comment> {
    // return this.http.post<Comment>(environment.COMMENT_URL, comment);
    comment.id = COMMENTS.length;
    let post = POSTS.find(p => p.id === comment.postId);
    post.comments.push(comment);
    return of(comment);
  }
}
