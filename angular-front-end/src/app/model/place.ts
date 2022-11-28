import {Period} from "./period";
import {IPlace} from "./iplace";
import {IPeriod} from "./iperiod";

export class Place implements IPlace {
    id: number;
    address: string;
    name: string;
    periods: Period[];

    constructor(place: IPlace) {
        this.id = place.id;
        this.name = place.name;
        this.address = place.address;
        this.periods = place.periods.map(period => new Period(period));
    }

}
