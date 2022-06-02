import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProvidersComponent } from './pages/providers/providers.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"provider/:slug" , component:ProvidersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
