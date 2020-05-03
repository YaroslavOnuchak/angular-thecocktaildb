import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoctailsComponent } from './pages/coctails/coctails.component';


const routes: Routes = [
//   {path:'', redirectTo: 'drink', pathMatch: 'full'},
//   {path: 'drink', component:CoctailsComponent,
// children:[

// ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
