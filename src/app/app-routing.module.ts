import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MenuComponent } from './Components/menu/menu.component';
import { ReviewComponent } from './Components/review/review.component';
import { StaticContentComponent } from './Components/static-content/static-content.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full' },
  { path: 'home', component: HomeComponent, title: "Home | Siya's Treats" },
  { path: 'review', component: ReviewComponent, title: "Reviews | Siya's Treats" },
  { path: 'menu', component: MenuComponent, title: "Menu | Siya's Treats" },
  { path: 'static', component: StaticContentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
