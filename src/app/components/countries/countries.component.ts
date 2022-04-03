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

  countries$ : Observable<Array<Country>>
  
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.countries$ = this.api.getCountries();
  }

}