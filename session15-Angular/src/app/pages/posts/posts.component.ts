import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:any[]=[
    {title : "single-post 1" , body : "single-post-1 body Lorem ipsum dolor sit, amet"},
    {title : "single-post 2" , body : "single-post-2 body Lorem ipsum dolor sit, amet"},
    {title : "single-post 3" , body : "single-post-3 body Lorem ipsum dolor sit, amet"},
    {title : "single-post 4" , body : "single-post-4 body Lorem ipsum dolor sit, amet"},
    {title : "single-post 5" , body : "single-post-5 body Lorem ipsum dolor sit, amet"},
    {title : "single-post 6" , body : "single-post-6 body Lorem ipsum dolor sit, amet"},
    {title : "single-post 7" , body : "single-post-7 body Lorem ipsum dolor sit, amet"},
    {title : "single-post 8" , body : "single-post-8 body Lorem ipsum dolor sit, amet"},
    {title : "single-post 9" , body : "single-post-9 body Lorem ipsum dolor sit, amet"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
