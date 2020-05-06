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

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ItemInfoComponent } from './pages/item-info/item-info.component';
import { FilterByAlcoholicPipe } from './shared/pipes/filterByAlcoholic/filter-by-alcoholic.pipe';
import { FormsModule } from '@angular/forms';

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
    PageNotFoundComponent,
    ItemInfoComponent,
    FilterByAlcoholicPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
