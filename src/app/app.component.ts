import { Component } from '@angular/core';
import { User } from './data/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  users = [
    {
      name: "Mike",
      phone: "+380651923347"
    },
    {
      name: "Anna",
      phone: "+380981923367"
    }

  ]
}
