import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getBack(e: Event){
    e.preventDefault();
    window.history.back();
  }
}
