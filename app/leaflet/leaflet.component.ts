import {Component, OnInit} from 'angular2/core';
import {LeafletService} from '../services/leaflet.service';

@Component({
    selector: 'leaflet',
    templateUrl: './app/leaflet/leaflet.component.html'
})

export class LeafletComponent implements OnInit{
    private _leafletService: LeafletService;

    constructor(leafletService: LeafletService){
        this._leafletService = leafletService;
    }

    ngOnInit(){
        var map = new L.Map('map', {
            zoomControl: false,
          center: new L.LatLng(37, -95),
          zoom: 4,
          minZoom: 4,
          maxZoom: 18,
          layers: [this._leafletService.baseMaps.OpenStreetMap]
      });

      this._leafletService.map = map;
    }
}
