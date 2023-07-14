import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full' },
  { path: 'home', component: HomeComponent, title: "Home - Siya's Treats" },
  { path: 'testimonies', component: HomeComponent, title: "Testimonies - Siya's Treats" },
  { path: 'menu', component: MenuComponent, title: "Menu - Siya's Treats" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
