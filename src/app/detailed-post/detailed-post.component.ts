import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post';

import { PostService } from '../services/post.service';

import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-detailed-post',
  templateUrl: './detailed-post.component.html',
  styleUrls: ['./detailed-post.component.scss']
})
export class DetailedPostComponent implements OnInit, OnDestroy {

  post : Post;

  checked: boolean = false; //slider

  posts: any[];
  postSubscription: Subscription;


  constructor(private postService: PostService) { }

  ngOnInit() {
    /*this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
        //this.post =this.posts[0];
      }
    );
    this.postService.emitPostsSubject();*/
        //this.post = this.postService.getDailyPost();
        this.postSubscription = this.postService.postSubject.subscribe(
          (post: Post) => {
            this.post = post;
            //this.post =this.posts[0];
          }
        );
        this.postService.emitPostSubject();
  }

  /*
    Affiche un badge avec une valeur sur le slider
  */
  formatLabel(value: number | null) {
   if (!value) {
     return 0;
   }

   if (value >= 0) {
     return value ;
   }

   return value;
 }

 ngOnDestroy() {
     this.postSubscription.unsubscribe();
   }



}
