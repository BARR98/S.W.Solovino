import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/services/Posts/post.service';
@Component({
  selector: 'app-public-post',
  templateUrl: './public-post.component.html',
  styleUrls: ['./public-post.component.css']
})

export class PublicPostComponent implements OnInit {

  post: any; 

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.postService.GetAllPosts()
    .subscribe(postGeted => {
      this.post = postGeted;
      console.log(this.post)
    })
  }

}
