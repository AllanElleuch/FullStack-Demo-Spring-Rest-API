import {Component, OnInit} from '@angular/core';
import {Place} from "../../model/place";
import {PlaceAPIService} from "../../service/place-api.service";

@Component({
    selector: 'app-places',
    templateUrl: './places.component.html',
    styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
    places: Place[] = [];

    constructor(private placeService: PlaceAPIService) {
    }


    ngOnInit(): void {
        this.getPlaces();
    }

    getPlaces(): void {
        this.placeService.getPlaces()
            .subscribe(places => this.places = places);
    }


}
