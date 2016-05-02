import {Component, OnInit} from 'angular2/core';
import {Location} from '../models/location';
import {LocationsService} from '../services/locations.service';

@Component({
  selector: 'location-links',
  templateUrl: './app/locationlinks/locationlinks.component.html',
  providers: [LocationsService]
})

export class LocationLinksComponent implements OnInit {
  private _locationsService: LocationsService;

  locations: Location[];

  constructor(locationsService: LocationsService) {
    this._locationsService = locationsService;
  }

  ngOnInit() {
    this.getLocations();
  }

  getLocations() {
    this._locationsService.getLocations()
      .then(locations => this.locations = locations);
  }
}
