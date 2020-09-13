import { Component, OnInit } from '@angular/core';
import {Product} from "../product"
@Component({
  selector: 'app-productentry',
  templateUrl: './productentry.component.html',
  styleUrls: ['./productentry.component.css']
})
export class ProductentryComponent implements OnInit {

  model = new Product("123","par","20","good")
  constructor() { }

  ngOnInit(): void {
  }

}
