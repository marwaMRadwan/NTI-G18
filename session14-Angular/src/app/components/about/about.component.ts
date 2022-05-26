import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  lightgray = "lightgray"
  status : boolean = false
  red = "red"
  inputVal = ""
  headingText= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, ea."
  constructor() { }

  ngOnInit(): void {
  }
  divColor(){
    return "orange"
  }

  inputValue(event:any){
    console.log('typing...')
    console.log(event.target.value)
    this.inputVal = event.target.value

  }

  showInputValue(val:any){
    console.log(val.value)
  }

}
