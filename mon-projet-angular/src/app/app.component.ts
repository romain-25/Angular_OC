import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  appareilOne = 'Machine a laver';
  ppareilTwo = 'Television';
  ppareilThree = 'Ordinateur';
}
