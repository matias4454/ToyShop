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

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    HomeComponent,
    ToysComponent,
    AccessoriesComponent,
    SpecOffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }