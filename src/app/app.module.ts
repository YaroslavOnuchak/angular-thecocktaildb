import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';

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
import { ModalComponent } from './pages/modal/modal/modal.component';



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
    ItemInfoComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
