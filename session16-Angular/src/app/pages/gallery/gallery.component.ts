import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private global :GlobalService) {
    
   }
  images:any=[]
  loadingStatus:boolean = true
  ngOnInit(): void {
    this.global.getImages().subscribe(items=>{
      this.images = items
    }, (err)=>{
      console.log(err)
    } , ()=>{
      this.loadingStatus = false

    })
  }

}
