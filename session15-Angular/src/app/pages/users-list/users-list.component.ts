import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users:any=[]
  constructor() { }

  ngOnInit(): void {
  }

  handleUser(e:any){
    console.log("-----------------------------")
    console.log(e)
    console.log("-----------------------------")
    this.users.push(e)

  }

}
