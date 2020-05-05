import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoctailsComponent } from './pages/cocktails/cocktails.component';
import { DoublePageComponent } from './pages/double-page/double-page.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { CocktailInfoComponent } from './pages/cocktails/cocktail-info/cocktail-info.component';
import { IngredientInfoComponent } from './pages/ingredients/ingredient-info/ingredient-info.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'double-page', pathMatch: 'full' },
  { path: 'double-page', component: DoublePageComponent },
  { path: 'cocktails', component: CoctailsComponent },
  { path: 'cocktails/:idDrink', component: CocktailInfoComponent },
  { path: 'double-page/:idDrink', redirectTo: 'cocktails/:idDrink' },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'double-page/:idIngredient', redirectTo: 'ingredients/:idIngredient' },
  { path: 'ingredients/:idIngredient', component: IngredientInfoComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
