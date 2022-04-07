import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Country } from '../country/model/country';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  country:Country | null = null;

  languages:string = '';


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.country =this.apiService.getCountry();
    this.languages = Object.values({...this.country?.languages}).toString();
    
  }

}
