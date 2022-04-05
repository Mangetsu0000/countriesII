import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-continents-page',
  templateUrl: './continents-page.component.html',
  styleUrls: ['./continents-page.component.css']
})
export class ContinentsPageComponent implements OnInit {

  continent: string= '';

  setContinentAfrica(){
    this.continent = 'Africa'
  }
  setContinentAmerica(){
    this.continent = 'Americas'
  }
  setContinentAsia(){
    this.continent = 'Asia'
  }
  setContinentEurope(){
    this.continent = 'Europe'
  }
  setContinentAustralia(){
    this.continent = 'Oceania'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
