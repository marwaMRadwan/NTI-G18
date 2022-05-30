import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:any={}
  constructor(private global : GlobalService) { }

  ngOnInit(): void {
  }

  handleSubmit(reg:NgForm){
    if(reg.valid){
      console.log(reg)
      this.model.role = 5
      console.log(this.model) 
      this.global.signUp(this.model).subscribe(res=>{
        console.log(res)
      })
    }
  }

}
