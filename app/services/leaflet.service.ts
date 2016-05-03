import {Injectable} from 'angular2/core';
import {Map, TileLayer} from 'leaflet';
import {Marker} from '../models/marker';

@Injectable()
export class LeafletService{
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
            CartoDB: new L.TileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
            	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
            })
        };
    }

    addMakerToMap(marker: Marker){
        L.marker([marker.lat, marker.lng])
          .addTo(this.map)
          .bindPopup(marker.message);
    }

    zoomToMarker(marker: Marker){
        this.map.setView([marker.lat, marker.lng], 14, {
            animate: true
        });
    }
}
