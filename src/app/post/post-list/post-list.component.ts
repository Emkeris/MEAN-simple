import { Component, Input, OnInit } from '@angular/core';
import { Post } from './../post.model';
import { PostService } from './../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  // posts = [
  //   {title: 'First title', content: 'This is first content'},
  //   {title: 'Second title', content: 'This is second content'},
  //   {title: 'Third title', content: 'This is third content'},
  // ];

  @Input() posts: Post[] = [];

  constructor(public postService: PostService) {
  }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
