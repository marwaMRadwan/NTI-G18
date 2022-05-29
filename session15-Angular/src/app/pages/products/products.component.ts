import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  Products:any[]=[
    {title : "single-product 1" , body : "single-product-1 body Lorem ipsum dolor sit, amet"},
    {title : "single-product 2" , body : "single-product-2 body Lorem ipsum dolor sit, amet"},
    {title : "single-product 3" , body : "single-product-3 body Lorem ipsum dolor sit, amet"},
    {title : "single-product 4" , body : "single-product-4 body Lorem ipsum dolor sit, amet"},
    {title : "single-product 5" , body : "single-product-5 body Lorem ipsum dolor sit, amet"},
    {title : "single-product 6" , body : "single-product-6 body Lorem ipsum dolor sit, amet"},
    {title : "single-product 7" , body : "single-product-7 body Lorem ipsum dolor sit, amet"},
    {title : "single-product 8" , body : "single-product-8 body Lorem ipsum dolor sit, amet"},
    {title : "single-product 9" , body : "single-product-9 body Lorem ipsum dolor sit, amet"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
