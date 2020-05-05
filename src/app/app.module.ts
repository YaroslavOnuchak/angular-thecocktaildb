import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './coponents/header/header.component';
import { NavbarComponent } from './coponents/navbar/navbar.component';
import { MainComponent } from './coponents/main/main.component';
import { FooterComponent } from './coponents/footer/footer.component';
import { CoctailsComponent } from './pages/cocktails/cocktails.component';
import { CoctailItemComponent } from './pages/cocktails/cocktail-item/cocktail-item.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { IngredientsItemComponent } from './pages/ingredients/ingredients-item/ingredients-item.component';
import { DoublePageComponent } from './pages/double-page/double-page.component';
import { CocktailInfoComponent } from './pages/cocktails/cocktail-info/cocktail-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    CoctailsComponent,
    CoctailItemComponent,
    IngredientsComponent,
    IngredientsItemComponent,
    DoublePageComponent,
    CocktailInfoComponent
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
