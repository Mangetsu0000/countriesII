import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Country } from '../components/country/model/country';
import { COUNTRIES } from '../data/countries';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  countries = COUNTRIES;
  filteredCountries : Country[] = [];
  filteredCountriesByContinent: Country[]= [];
  constructor(private routerService: Router) { }

  getCountries(name: string, continent: string): Observable<any[]>{
    if (name.trim() == '' && continent ==''){
      return of (this.countries);
    }
    else if( continent=='' && name !==''){
    this.filteredCountries = this.countries.filter((country) => {
      
      return country.name?.common.toLowerCase().includes(name.toLowerCase());
    });
    }
    else if( continent !=='' && name == ""){
      this.routerService.navigate(['/countries', continent]);
      this.filteredCountries = this.countries.filter((country)=>{
        return country.region?.toLowerCase() === continent.toLowerCase();
      }); console.log(this.filteredCountries);
    }
    return of (this.filteredCountries); 
  }



  // getCountriesByContinent(continent: string): Observable<any[]>{
  //   this.routerService.navigate(['/countries', continent]);
  //   this.filteredCountriesByContinent = this.countries.filter((country)=>{
  //     return country.region?.toLowerCase() === continent.toLowerCase();
  //   }); console.log(this.filteredCountriesByContinent);
    
  //   return of (this.filteredCountriesByContinent);
  // }
  
}
