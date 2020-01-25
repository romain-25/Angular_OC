import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';


posts = [
  {
    name: 'Mon premier post',
    status: 'éteint'
  },
  {
    name: 'Mon deuxième post',
    status: 'allumé'
  },
  {
    name: 'Encore un post',
    status: 'éteint'
  }
];

}