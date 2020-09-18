import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoctailsComponent } from './pages/cocktails/cocktails.component';
import { DoublePageComponent } from './pages/double-page/double-page.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ItemInfoComponent } from './pages/item-info/item-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
  { path: 'double-page', component: DoublePageComponent },
  { path: 'cocktails', component: CoctailsComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'double-page/:id', component: ItemInfoComponent },
  { path: 'cocktails/:id', redirectTo: 'double-page/:id' },
  { path: 'ingredients/:id', redirectTo: 'double-page/:id' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
