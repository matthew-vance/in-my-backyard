import {Component} from 'angular2/core';
import {LeafletService} from '../services/leaflet.service';

import {LeafletComponent} from '../leaflet/leaflet.component';
import {NavbarComponent} from '../navbar/navbar.component';
import {LocationLinksComponent} from '../locationlinks/locationlinks.component';

@Component({
    selector: 'app',
    templateUrl: './app/app/app.component.html',
    directives: [NavbarComponent, LeafletComponent, LocationLinksComponent],
    providers: [LeafletService]
})
export class AppComponent {

}
