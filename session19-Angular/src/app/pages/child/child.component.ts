import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() num :number = 0

  constructor() {
    console.log(`${this.num} ------ constructor` )
   }

  ngOnInit(): void {
    console.log(`${this.num} ------ ng oon init`)
  }
  ngOnChanges(e:Event){
    console.log(e)
    console.log("on changes")
  }
  ngDoCheck(){
    console.log("on do check")
  }
  ngAfterContentInit(){
    console.log("agter content init")
  }
  ngAfterContentChecked(){
    console.log("after content checked")
  }
  ngAfterViewInit(){
    console.log("after view init")
  }
  ngAfterViewChecked(){
    console.log("after view checked")
  }
  ngOnDestroy(){
    console.log("ng on Destroy")
    localStorage.removeItem("name")

  }
  handle(){
    localStorage.setItem("name" , "nouran")
  }

}
