import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showRoles :any =[]
  constructor(private global:GlobalService) { }

  ngOnInit(): void {
    this.global.loadRoles().subscribe(roles=>{
      this.showRoles = roles.data
    })
  }

}
