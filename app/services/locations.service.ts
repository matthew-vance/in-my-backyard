import {Injectable} from 'angular2/core';
import {LOCATIONS} from '../mocks/mock-locations';

@Injectable()
export class LocationsService{
    getLocations(){
        return Promise.resolve(LOCATIONS);
    }
}
