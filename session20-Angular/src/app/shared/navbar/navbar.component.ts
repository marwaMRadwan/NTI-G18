import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public global:GlobalService) {
    if(localStorage.getItem("token")){
      this.global.authMe().subscribe(data=>{
        console.log(data[0].role)
        if(data[0].role == 5){
          this.global.userRole = true
        }


      })
    }
   }

  ngOnInit(): void {
    
  }

}
