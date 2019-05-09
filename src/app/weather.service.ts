import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import {map} from 'rxjs/operators';


@Injectable()
export class WeatherService {
  apiKey='baee88ea2bc8becdec24236254656182';
  url;
  constructor(private http:Http) { 
    this.url='http://api.openweathermap.org/data/2.5/forecast?q=';
  }

  getWeather(city,code){
    return this.http.get(this.url + city +',' + code + '&APPID=' + this.apiKey).pipe( map( res => res.json()))
     }
}
