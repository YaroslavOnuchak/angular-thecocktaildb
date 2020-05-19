import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './coponents/header/header.component';
import { NavbarComponent } from './coponents/navbar/navbar.component';
import { MainComponent } from './coponents/main/main.component';
import { FooterComponent } from './coponents/footer/footer.component';
import { CoctailsComponent } from './pages/cocktails/cocktails.component';

import { IngredientsComponent } from './pages/ingredients/ingredients.component';

import { DoublePageComponent } from './pages/double-page/double-page.component';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ItemInfoComponent } from './pages/item-info/item-info.component';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    CoctailsComponent,
    IngredientsComponent,
    DoublePageComponent,
    PageNotFoundComponent,
    ItemInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
