import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { HomeComponent } from './components/home/home.component';
import { ToysComponent } from './components/toys/toys.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { SpecOffersComponent } from './components/spec-offers/spec-offers.component';

const routes: Routes = [ 
  { path: 'Toys', component: ToysComponent },
  { path: 'Accessories', component: AccessoriesComponent },
  { path: 'SpecOffers', component: SpecOffersComponent },
  { path: '**', component: HomeComponent }
  ] 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
