import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postName: string ='Post';
  postStatus : string ='Love it';

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.postStatus;
  }

}
