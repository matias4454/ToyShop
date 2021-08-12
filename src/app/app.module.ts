import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from './services/data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { HomeComponent } from './components/home/home.component';
import { ToysComponent } from './components/toys/toys.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { SpecOffersComponent } from './components/spec-offers/spec-offers.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { DetailsViewComponent } from './components/accessories/details-view/details-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    HomeComponent,
    ToysComponent,
    AccessoriesComponent,
    SpecOffersComponent,
    ProductDetailsComponent,
    DetailsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
