import {Component, OnInit} from '@angular/core';
import {Place} from "../../model/place";
import {ActivatedRoute} from "@angular/router";
import {PlaceAPIService} from "../../service/place-api.service";
import {Location} from '@angular/common';
import {Period} from "../../model/period";


@Component({
    selector: 'app-place-detail',
    templateUrl: './place-detail.component.html',
    styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {
    place: Place | undefined;
    id: number | undefined;

    constructor(
        private route: ActivatedRoute,
        private placeService: PlaceAPIService,
        private location: Location
    ) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            console.log(params)
            let currentId = params['id'];
            this.id = currentId;
            this.getPlace(currentId);
        });
    }

    renderPeriodDay(period: Period): string {
        console.log(period)
        return period.getDay();
    }

    getPlace(id: number): void {
        this.placeService.getPlace(id)
            .subscribe((place: Place | undefined) => {
                this.place = place;
                console.log(place)
            });
    }

    goBack(): void {
        this.location.back();
    }


}
