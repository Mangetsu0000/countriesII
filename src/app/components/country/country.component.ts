import { Component, Input, OnInit } from '@angular/core';
import { Country } from './model/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @Input() country: Country | null = null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
