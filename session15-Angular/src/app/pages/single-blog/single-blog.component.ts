import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {
  id: any
  singleBlog: any = []
  constructor(private _activated: ActivatedRoute, private global: GlobalService) { }

  ngOnInit(): void {
    console.log(this._activated.snapshot.paramMap.get("userId"))
    this.id = this._activated.snapshot.paramMap.get("userId")
    this._activated.paramMap.subscribe(params => {
      console.log(params.get("userId"))

    })

    this.global.getSingleBlog(this.id).subscribe(blog => {
      console.log(blog)
      this.singleBlog = blog
    })

  }

}
