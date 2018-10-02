import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent {
  http: any;

  constructor() { }

  lat: any;
  lon: any;



  getPosition = (lat, lon) => {
    if (window.navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        console.log(this.lat)
      });
    }

  }
}

  /* ngOnInit() {
     if(window.navigator.geolocation){
            window.navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
            };
  } */


