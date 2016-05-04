import {Component, OnInit} from 'angular2/core';
import {Location} from '../models/location';
import {LocationsService} from '../services/locations.service';
import {LeafletService} from '../services/leaflet.service';
import {GoogleMapsService} from '../services/googlemaps.service';

@Component({
  selector: 'location-links',
  templateUrl: './app/locationlinks/locationlinks.component.html',
  styleUrls: ['./app/locationlinks/locationlinks.component.css'],
  providers: []
})

export class LocationLinksComponent implements OnInit {
  private _locationsService: LocationsService;
  private _leafletService: LeafletService;
  private _googleMapsService: GoogleMapsService;

  selectedLocation: Location;
  locations: Location[];

  constructor(locationsService: LocationsService, leafletService: LeafletService, googleMapsService: GoogleMapsService) {
    this._locationsService = locationsService;
    this._leafletService = leafletService;
    this._googleMapsService = googleMapsService;
  }

  ngOnInit() {
    this.getLocations();
  }

  getLocations() {
    this._locationsService.getLocations()
      .then(locations => this.locations = locations);
  }

  zoomToLocation(location: Location){
      this.selectedLocation = location;
      this._leafletService.zoomToMarker(location.marker);
      this._googleMapsService.zoomToMarker(location.marker);
  }
}
