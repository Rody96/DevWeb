import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ParcoursMoulinsartComponent } from './parcours-moulinsart/parcours-moulinsart.component';
import { ParcoursSciencesComponent } from './parcours-sciences/parcours-sciences.component';
import { ParcoursCyclotronComponent } from './parcours-cyclotron/parcours-cyclotron.component';
import { ParcoursLacComponent } from './parcours-lac/parcours-lac.component';
import { ParcoursBotaniqueComponent } from './parcours-botanique/parcours-botanique.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ParcoursMoulinsartComponent,
    ParcoursSciencesComponent,
    ParcoursCyclotronComponent,
    ParcoursLacComponent,
    ParcoursBotaniqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
