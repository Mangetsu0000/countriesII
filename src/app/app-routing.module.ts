import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentsPageComponent } from './components/continents-page/continents-page.component';
import { CountriesComponent } from './components/countries/countries.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{path: '', component: HomeComponent},
                        {path: 'home', component: HomeComponent},
                        {path: 'countries', component: CountriesComponent},
                        {path: 'continents', component: ContinentsPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
