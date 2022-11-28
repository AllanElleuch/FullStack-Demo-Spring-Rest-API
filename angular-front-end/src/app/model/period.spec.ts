import {Period} from "./period";

describe('Place', () => {
    it('should get day of an instance', () => {
        let place: Period = new Period({"id": 1, "day": 0, "start": new Date("12:00:00"), "end": new Date("18:30:00")});

        expect(place.getDay()).toEqual("Monday");
    });


});
