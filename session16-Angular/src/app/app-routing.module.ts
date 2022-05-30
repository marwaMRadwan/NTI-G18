import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './pages/error404/error404.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path:"home" , component:HomeComponent},
  {path : "" , redirectTo:"home" , pathMatch:'full' },
  {path : "gallery" , component:GalleryComponent},
  {path:"images" , redirectTo:"gallery" , pathMatch:'full'},
  {path:"register" , component:RegisterComponent},
  {path:"**" , component:Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
