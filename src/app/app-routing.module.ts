import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ParcoursMoulinsartComponent } from './parcours-moulinsart/parcours-moulinsart.component';
import { ParcoursSciencesComponent } from './parcours-sciences/parcours-sciences.component';
import { ParcoursCyclotronComponent } from './parcours-cyclotron/parcours-cyclotron.component';
import { ParcoursLacComponent } from './parcours-lac/parcours-lac.component';
import { ParcoursBotaniqueComponent } from './parcours-botanique/parcours-botanique.component';


const routes: Routes = [
  { path: 'home', component: HomepageComponent},
  { path: 'moulinsart', component: ParcoursMoulinsartComponent},
  { path: 'sciences', component: ParcoursSciencesComponent},
  { path: 'cyclotron', component: ParcoursCyclotronComponent},
  { path: 'lac', component: ParcoursLacComponent},
  { path: 'botanique', component: ParcoursBotaniqueComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
