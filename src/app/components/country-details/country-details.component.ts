import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Country } from '../country/model/country';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  country:Country | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // this.apiService.selectedCountry$.subscribe((country)=>{this.country= country});
  }

}
