import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hover: boolean = false;
  menu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
