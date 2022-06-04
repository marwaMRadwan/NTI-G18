import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  showImages:any=[]
  constructor(private global:GlobalService , private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.showImages = this.activated.snapshot.data['galleryImages']
    // this.global.getImages().subscribe(data=>{
    //   this.showImages=data
    // })
  }

}
