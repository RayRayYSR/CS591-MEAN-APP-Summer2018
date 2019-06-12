import { Component } from '@angular/core';
import { datas} from './mock-datas';
import {Data} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CS591A1 PS5';
  data = datas;
}
