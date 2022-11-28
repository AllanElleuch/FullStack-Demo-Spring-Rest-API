import {TestBed} from '@angular/core/testing';

import {PlaceAPIService} from './place-api.service';
import {HttpClientModule} from "@angular/common/http";
import {Observable, of} from 'rxjs';
import {Place} from "../model/place";
import {IPlace} from "../model/iplace";
import {Period} from "../model/period";
import {IPeriod} from "../model/iperiod";

describe('PlaceAPIService', () => {
    let service: PlaceAPIService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        });
        service = TestBed.inject(PlaceAPIService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    // need to be done with mocked API
    it('should get place', () => {

        let data: Place = {
            "id": 29,
            "name": "Le café du marché",
            "address": "Rue de Conthey 17, 1950 Sion",
            "periods": [
                new Period({"id": 1, "day": 0, "start": new Date("12:00:00"), "end": new Date("18:20:00")})
            ],
            "validFrom": new Date("2022-11-25T00:00:00.000+00:00"),
            "validThrough": new Date("2022-11-25T00:00:00.000+00:00"),
        }
        let obs = new Observable<Place>((subscriber) => {
            subscriber.next(data)
        });

        spyOn<PlaceAPIService>(service, 'getPlace').withArgs(29).and.returnValue(obs);

        let place = service.getPlace(29)
        place.subscribe(promisedPlace => {
            expect(promisedPlace).toBeTruthy();

        })
    });
});
