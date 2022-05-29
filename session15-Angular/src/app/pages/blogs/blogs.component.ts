import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs :any = []
  constructor(private  global : GlobalService) { }

  ngOnInit(): void {
    console.log(this.global.getBlogs())
    this.global.getBlogs().subscribe(data=>{
      console.log(data)
      this.blogs= data
    })
  }

}
