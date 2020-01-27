import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postDate = new Date();
  @Input() postName: string;
  @Input() postStatus: string;
  @Input() postContent: string;
  postCount: number = 0;

  constructor() { }

  ngOnInit() {
  }


  getColor() {
    if(this.postCount < 0) {
      return 'red';   
    }
    else if(this.postCount > 0) {
      return 'green';
    }
}

    increment() {
     return this.postCount ++;
      
    };
    decrement() {
      { return this.postCount --}
      ;
    };

    

}


