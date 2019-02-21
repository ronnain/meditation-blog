import { Injectable } from '@angular/core';
import { Post } from '../models/post';

import { Subject } from 'rxjs/Subject';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[];

  postsSubject = new Subject<any[]>();
  postSubject = new Subject<Post>();




  constructor() {
    this.posts = [    new Post("Titre 1", ["tralalala", "trililili", "dzaiodzaihozdajioijadz", "zizaddzaijozadop"], 5, new Date, 2, 250),
                      new Post("Titre 3", ["trelelelelel", "trulululu"], 4, new Date, 2.5, 0),
                      new Post("Titre 1", ["trolololo", "treuleuleu"], 3, new Date, 3, 50),];
   }

   /*emitPostsSubject() {
    this.postsSubject.next(this.posts.slice());
  }*/

    /**
      Envoie un post random
    */
    emitPostSubject() {
     this.postSubject.next(this.posts[0]);
   }

   /*getDailyPost(){
     return this.posts[0];
   }*/






}
