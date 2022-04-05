import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../components/country/model/country';
import { COUNTRIES } from '../data/countries';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  countries = COUNTRIES;
  filteredCountries : Country[] = [];
  constructor() { }

  getCountries(name: string): Observable<any[]>{
    if (name.trim() == '' ){
      return of (this.countries);
    }
    else{
    this.filteredCountries = this.countries.filter((countri) => {
      
      return countri.name?.common.toLowerCase().includes(name.toLowerCase());
    });
    return of (this.filteredCountries);
    }
  }
  
}
