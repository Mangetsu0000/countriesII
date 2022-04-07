import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Country } from './model/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @Input() country: Country | null = null;
  
  constructor(private apiService: ApiService, private routerService: Router) { }

  ngOnInit(): void {
  }
  onSeclectCountry(){
    if (this.country){
      this.apiService.selectCountry(this.country);
      this.routerService.navigate(['/countries/details',  this.country?.name?.common]);
      console.log(`should be displaying ${this.country?.name?.common}'s details`);
      console.log('this country is ', this.country);
      
    }
  }
}
