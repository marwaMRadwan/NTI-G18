import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  fName : string = "Nouran"
  lName : string = "Fayez"
  inputType : string = "text"
  inputPlaceholder :any = "Enter your Name"
  inputClass : string = "form-control"
  inputBorder : string = "border-primary"
  imagePath : string = "assets/images/download.jfif"
  inputDisabled : boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  getFullName(){
    return "Ahmed Mohamed"
  }

  getMax(num1 :number , num2 : number){
    return Math.max(num1 , num2)
  }

}
