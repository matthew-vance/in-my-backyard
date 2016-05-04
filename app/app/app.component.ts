import {Component} from 'angular2/core';

import {LeafletComponent} from '../leaflet/leaflet.component';
import {NavbarComponent} from '../navbar/navbar.component';
import {LocationLinksComponent} from '../locationlinks/locationlinks.component';
import {GoogleMapsComponent} from '../googlemaps/googlemaps.component';
import {LocationsService} from '../services/locations.service';
import {LeafletService} from '../services/leaflet.service';
import {GoogleMapsService} from '../services/googlemaps.service';

@Component({
    selector: 'app',
    templateUrl: './app/app/app.component.html',
    directives: [NavbarComponent, LeafletComponent, LocationLinksComponent, GoogleMapsComponent],
    providers: [LocationsService, LeafletService, GoogleMapsService]
})
export class AppComponent {

}
