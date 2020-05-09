import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoctailsComponent } from './pages/cocktails/cocktails.component';
import { DoublePageComponent } from './pages/double-page/double-page.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ItemInfoComponent } from './pages/item-info/item-info.component';


const routes: Routes = [
  { path: '', redirectTo: 'double-page', pathMatch: 'full' },
  { path: 'double-page', component: DoublePageComponent },
  { path: 'cocktails', component: CoctailsComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'cocktails/:id', redirectTo: 'double-page/:id' },
  { path: 'ingredients/:id', redirectTo: 'double-page/:id' },
  { path: 'double-page/:id', component: ItemInfoComponent },
  // { path: 'double-page/id:id', redirectTo: 'ingredients/:id' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
