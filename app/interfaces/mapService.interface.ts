import {Marker} from '../models/marker';

export interface MapService{
    addMarkerToMap: (marker: Marker) => void,
    zoomToMarker: (marker: Marker) => void
}
