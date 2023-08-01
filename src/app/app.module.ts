import { NgModule, isDevMode, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//store
import { StoreModule } from '@ngrx/store';
import { MenuReducer } from './store/menu.reducer';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialHelperModule } from './Helpers/material-helper.module';
import { AppRoutingModule } from './app-routing.module';


import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MenuComponent } from './Components/menu/menu.component';
import { ProfileModule } from './Modules/profile/profile.module';
import { ReviewComponent } from './Components/review/review.component';
import { HttpClientModule } from '@angular/common/http';
import { OffersComponent } from './Components/offers/offers.component';
import { StaticContentComponent } from './Components/static-content/static-content.component';
import { CategoriesComponent } from './Components/menu/categories/categories.component';
import { ProductsComponent } from './Components/menu/products/products.component';
import { ChipsComponent } from './Components/menu/chips/chips.component';


@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ReviewComponent,
    OffersComponent,
    StaticContentComponent,
    CategoriesComponent,
    ProductsComponent,
    ChipsComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialHelperModule,
    AppRoutingModule,
    ProfileModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // StoreModule.forRoot({ shop: MenuReducer }),
   
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
