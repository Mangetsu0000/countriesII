import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { Country } from '../components/country/model/country';
import { COUNTRIES } from '../data/countries';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  countries = COUNTRIES;
  filteredCountries : Country[] = [];
  filteredCountriesByContinent: Country[]= [];
  private selectedCountrySubject = new Subject<Country>();
  selectedCountry$ = this.selectedCountrySubject.asObservable();
  constructor(private routerService: Router) { }

  getCountries(name: string): Observable<any[]>{
    if (name.trim() == ''){
      return of (this.countries);
    }
    else{
    this.filteredCountries = this.countries.filter((countri) => {
      
      return countri.name?.common.toLowerCase().includes(name.toLowerCase());
    });
    return of (this.filteredCountries);
    }
  }
  getCountriesByContinent(continent: string): Observable<any[]>{
    this.routerService.navigate(['/countries', continent]);
    this.filteredCountriesByContinent = this.countries.filter((country)=>{
      return country.region?.toLowerCase() === continent.toLowerCase();
    }); console.log(this.filteredCountriesByContinent);
    
    return of (this.filteredCountriesByContinent);
  }
  
  selectCountry(country: Country){
    this.selectedCountrySubject.next(country);
  }
}
