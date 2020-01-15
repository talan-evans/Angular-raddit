import { Comment } from './comment.model';

export interface Post {
    id: number,
    subraddit: string,
    title: string,
    body: string,
    likes: number,
    dislikes: number,
    createdBy: string,
    createdTime: Date,
    interaction: number,
    comments: Comment[]
}