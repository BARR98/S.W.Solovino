import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PostModel } from '../../models/post-model';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'http://localhost:3000/api/huellitas/posts';
  post: any;
  posts: PostModel[] = [];

  constructor(private http: HttpClient){ 
    this.post = this.post
    this.posts = new Array()
  }

  GetAllPosts(){
    return this.http.get(this.url)
  }

  GetPost(_id: string){
    return this.http.get(this.url + '/' + _id)
  }

  CreatePost(post:PostModel){
    return this.http.post(this.url,post)
  }

  UpdatePost(_id: string , post: PostModel){
    return this.http.put(this.url, post)
  }
  
  DeletePost(_id: string ){
    return this.http.delete(this.url + '/' + _id)
  }


}
