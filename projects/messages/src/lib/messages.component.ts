import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-messages',
  template: `
    <p>
      messages works!
    </p>
  `,
  styles: [
  ]
})
export class MessagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
