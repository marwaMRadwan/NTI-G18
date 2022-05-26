import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  flag = false

  arr:any = []

  constructor() { }

  ngOnInit(): void {
  }
  puchArr(){
    this.arr.push("Angular")
  }

}
