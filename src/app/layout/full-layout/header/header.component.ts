import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = "App title";
  rightItem = {
    items:[
      {
        caption: 'Text only'
      },
      {
        caption: 'Hi',
        icon: 'call'
      },
      {
        caption: 'Current user',
        icon: 'user outline'
      },
      {
        icon: 'sign out'
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
