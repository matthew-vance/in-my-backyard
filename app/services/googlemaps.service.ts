import {Injectable} from 'angular2/core';
/// <reference path=".typings/browser/ambient/google.maps/index.d.ts"
import {Marker} from '../models/marker';
import {MapService} from '../interfaces/mapService.interface';

@Injectable()
export class GoogleMapsService implements MapService {
  map: google.maps.Map;

  addMarkerToMap(marker: Marker) {
    var latLng = new google.maps.LatLng(marker.lat, marker.lng);
    var newMarker = new google.maps.Marker({
      position: latLng,
      title: marker.message
    });
    var infoWindow = new google.maps.InfoWindow({
      content: marker.message
    });

    newMarker.addListener('click', () => {
      infoWindow.open(this.map, newMarker);
    });

    newMarker.setMap(this.map);
  }

  zoomToMarker(marker: Marker) {
    this.map.panTo(new google.maps.LatLng(marker.lat, marker.lng));
    this.map.setZoom(14);
  }
}
