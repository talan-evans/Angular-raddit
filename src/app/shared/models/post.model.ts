import { Comment } from './comment.model';

export interface Post {
    id: number,
    subraddit: string,
    title: string,
    body: string,
    author: string,
    likes: number,
    dislikes: number,
    createTimestamp: Date,
    interaction: number,
    comments: Comment[]
}