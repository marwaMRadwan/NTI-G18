import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { User } from 'src/app/iterface/user';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  model:User={
    name:"",
    email:"",
    status:true
  }
  @Output() sendingUser = new EventEmitter<User>()
  constructor() { }
  ngOnInit(): void {
  }
  handleSubmit(){
    const userInfo = {
      name :this.model.name,
      email : this.model.email , 
      status : this.model.status
    }
    // console.log(this.model)
    this.sendingUser.emit(userInfo)
  }

}
