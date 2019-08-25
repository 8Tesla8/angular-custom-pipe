import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    {
      name: "Mike",
      phone: "+380651923347",
      money: 240,
    },
    {
      name: "Anna",
      phone: "+380981923367",
      money: 367,
    },
    {
      name: "Criss",
      phone: "+350981945734",
      money: 540,
    }
  ]
}
