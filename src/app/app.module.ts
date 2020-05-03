import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './coponents/header/header.component';
import { NavbarComponent } from './coponents/navbar/navbar.component';
import { MainComponent } from './coponents/main/main.component';
import { FooterComponent } from './coponents/footer/footer.component';
import { CoctailsComponent } from './pages/coctails/coctails.component';
import { CoctailItemComponent } from './pages/coctails/coctail-item/coctail-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    CoctailsComponent,
    CoctailItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
