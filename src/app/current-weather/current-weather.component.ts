import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  constructor(private weatherService: WeatherService) { }
  private current: ICurrentWeather
  ngOnInit() {
    this.weatherService.getCurrentWeather('Simla', 'IN')
      .subscribe((data) => this.current = data)
  }
}
