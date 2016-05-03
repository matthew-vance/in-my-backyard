import {Component, OnInit} from 'angular2/core';
import {Location} from '../models/location';
import {LocationsService} from '../services/locations.service';
import {LeafletService} from '../services/leaflet.service';

@Component({
  selector: 'location-links',
  templateUrl: './app/locationlinks/locationlinks.component.html',
  styleUrls: ['./app/locationlinks/locationlinks.component.css'],
  providers: [LocationsService]
})

export class LocationLinksComponent implements OnInit {
  private _locationsService: LocationsService;
  private _leafletService: LeafletService;

  selectedLocation: Location;
  locations: Location[];

  constructor(locationsService: LocationsService, leafletService: LeafletService) {
    this._locationsService = locationsService;
    this._leafletService = leafletService;
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
  }
}
