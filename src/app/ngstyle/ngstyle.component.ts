import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  colors:string[]=["black","red","green","blue"]
  vchcolor:string
  constructor() { }

  ngOnInit(): void {
  }

}
