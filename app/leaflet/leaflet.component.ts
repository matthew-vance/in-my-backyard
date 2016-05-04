import {Component, OnInit} from 'angular2/core';
import {LeafletService} from '../services/leaflet.service';
import {LocationsService} from '../services/locations.service';
import {Marker} from '../models/marker';

@Component({
  selector: 'leaflet',
  templateUrl: './app/leaflet/leaflet.component.html',
  styleUrls: ['./app/leaflet/leaflet.component.css']
})

export class LeafletComponent implements OnInit {
  private _leafletService: LeafletService;
  private _locationService: LocationsService;

  constructor(leafletService: LeafletService, locationService: LocationsService) {
    this._leafletService = leafletService;
    this._locationService = locationService;
  }

  ngOnInit() {
    var map = new L.Map('leaflet', {
      center: new L.LatLng(37, -95),
      zoom: 4,
      minZoom: 4,
      maxZoom: 18,
      maxBounds: new L.LatLngBounds(new L.LatLng(24.9493, -125.0011), new L.LatLng(49.5904, -66.9326)),
      layers: [this._leafletService.baseMaps.OpenStreetMap]
    });

    this._leafletService.map = map;

    this._locationService.getLocations()
      .then(locations => {
        for (var i = 0; i < locations.length; i++) {
          this._leafletService.addMarkerToMap(locations[i].marker);
        }
      })
  }


}
