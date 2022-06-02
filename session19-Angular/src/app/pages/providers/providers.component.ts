import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
  slug :any
  providers:any=[]
  pageSize=10
  p=1
  total :any
  constructor(private global:GlobalService , private activated :ActivatedRoute) { 
    this.slug = activated.snapshot.paramMap.get('slug')
    this.showProviderBySlug(0)
  }

  ngOnInit(): void {
  }

  pageChanged(page:any){
    let num = page
  this.showProviderBySlug(num-1)
    this.p = page
  }

  showProviderBySlug(num:any){
    var obj ={
      role_id : this.slug
    }
  
    this.global.loadProviders(obj , num).subscribe(res=>{
      console.log(res)
      this.providers=res.data
      this.total = res.Count
    })
  }

}
