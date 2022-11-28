import {Place} from './place';
import {Time} from "@angular/common";
import {IPlace} from "./iplace";
import {Period} from "./period";

describe('Place', () => {
    it('should create an instance', () => {
        let place: Place = {
            "id": 29,
            "name": "Le café du marché",
            "address": "Rue de Conthey 17, 1950 Sion",
            "periods": [
                new Period({"id": 1, "day": 0, "start": new Date("12:00:00"), "end": new Date("18:30:00")})
            ]
        }


        expect(place).toBeTruthy();
    });


});
