import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { COUNTRIES } from '../data/countries';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  countries = COUNTRIES;

  constructor() { }

  getCountries(): Observable<any[]>{
    return of (this.countries);
  }
}
