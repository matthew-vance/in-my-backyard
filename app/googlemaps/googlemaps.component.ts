import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from 'angular2/core';
/// <reference path=".typings/browser/ambient/google.maps/index.d.ts"
import {GoogleMapsService} from '../services/googlemaps.service';
import {LocationsService} from '../services/locations.service';

@Component({
  selector: 'google-maps',
  templateUrl: './app/googlemaps/googlemaps.component.html',
  styleUrls: ['./app/googlemaps/googlemaps.component.css']
})

export class GoogleMapsComponent implements OnInit, AfterViewInit {
  private _googleMapsService: GoogleMapsService;
  private _locationService: LocationsService;
  private map: google.maps.Map;

  constructor(googleMapsService: GoogleMapsService, locationService: LocationsService) {
    this._googleMapsService = googleMapsService;
    this._locationService = locationService;
  }

  @ViewChild('googleMapsElement') mapsElem: ElementRef;

  ngAfterViewInit() {
    this.map = new google.maps.Map(this.mapsElem.nativeElement, {
      center: {
        lat: 37,
        lng: -95
      },
      zoom: 4
    });

    this._googleMapsService.map = this.map;

    this._locationService.getLocations()
      .then(locations => {
        for (var i = 0; i < locations.length; i++) {
          this._googleMapsService.addMarkerToMap(locations[i].marker);
        }
      })

  }

  ngOnInit() {

  }
}
