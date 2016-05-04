import {Injectable} from 'angular2/core';
import {Map, TileLayer} from 'leaflet';
import {Marker} from '../models/marker';
import {MapService} from '../interfaces/mapService.interface';

@Injectable()
export class LeafletService implements MapService {
  map: Map;
  baseMaps: any;

  constructor() {
    this.baseMaps = {
      OpenStreetMap: new L.TileLayer("http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
      }),
      Esri: new L.TileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
      }),
      MapBox: new L.TileLayer('http://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Imagery from <a href="http://mapbox.com/about/maps/">MapBox</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: ['abcd'],
        id: 'mapbox.streets',
        accessToken: 'sk.eyJ1IjoibXZhbmNlNCIsImEiOiJjaW5zeGFoZjMxMTI3dWlram1keW50aWFmIn0.K3zDqyBRCP57lNDazNSF6w'
      })
    };
  }

  addMarkerToMap(marker: Marker) {
    L.marker([marker.lat, marker.lng])
      .addTo(this.map)
      .bindPopup(marker.message);
  }

  zoomToMarker(marker: Marker) {
    this.map.setView([marker.lat, marker.lng], 14, {
      animate: true
    });
  }
}
