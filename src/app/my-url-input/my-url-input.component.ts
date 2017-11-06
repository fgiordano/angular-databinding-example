import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-url-input',
  templateUrl: './my-url-input.component.html',
  styleUrls: ['./my-url-input.component.css']
})
export class MyUrlInputComponent implements OnInit {

  image: String = "";

  constructor() { }

  ngOnInit() {
  }

}
