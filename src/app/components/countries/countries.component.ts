import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Country } from '../country/model/country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  keyWord: string = '';

  filteredCountriesByContinent:[]=[];

  // continent$: Observable<string>;



  countries$ : Observable<Array<Country>> | undefined

  
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.countries$ = this.api.getCountries(this.keyWord);
    // this.countries$= this.api.getCountriesByContinent(this.continent$);
  }

  search(){
    this.countries$ = this.api.getCountries(this.keyWord);
  }

}
