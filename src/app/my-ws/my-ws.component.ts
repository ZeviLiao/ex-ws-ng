import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-ws',
  templateUrl: './my-ws.component.html',
  styleUrls: ['./my-ws.component.scss']
})
export class MyWsComponent implements OnInit {


  myValue;

  constructor() { }

  ngOnInit(): void {
  }
  updateMyValue(v) {
    this.myValue = v;
  }

  sendMsg() {
    alert(this.myValue);
  }

}
