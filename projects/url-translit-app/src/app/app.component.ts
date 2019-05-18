import { Component } from '@angular/core';
import {translit} from 'url-translit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = 'Библиотека URL транслит';
  title = translit(this.text);
}
