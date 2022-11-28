import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../environments/environment';
import {map, Observable} from "rxjs";
import {Place} from "../model/place";
import {IPlace} from "../model/iplace";

@Injectable({
    providedIn: 'root'
})
export class PlaceAPIService {

    private placesEndpoint = `${environment.apiUrl}/places`;
    private placeEndpoint = `${environment.apiUrl}/place`;

    constructor(private http: HttpClient) {
    }

    getPlaces(): Observable<Place[]> {
        return this.http.get<Place[]>(this.placesEndpoint);
    }


    getPlace(id: number): Observable<Place> {
        let placeWithIDEndpoint = `${this.placeEndpoint}/${id}`;
        return this.http.get<Place>(placeWithIDEndpoint).pipe(map((place) => new Place(place)));
    }


}
