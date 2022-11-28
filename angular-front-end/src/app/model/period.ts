import {IPeriod} from "./iperiod";
import {Day} from "./day";

export class Period implements IPeriod {
    id: number;
    start: Date;
    end: Date;
    day: number;


    // constructor(id: number, day: number, start: Date, end: Date) {
    //     this.id = id;
    //     this.day = day;
    //     this.start = start;
    //     this.end = end;
    // }

    constructor(period: IPeriod) {
        this.id = period.id;
        this.day = period.day;
        this.start = period.start;
        this.end = period.end;
    }

    public getDay(): string {
        return Day[this.day]
    }


    public toString = (): string => {
        return `Foo (id: ${this.id})`;
    }

    // get day(): number {
    //     return this._day;
    // }
    //
    // set day(value: number) {
    //     this._day = value;
    // }

    // public getDay(): string {
    //     switch (this.day) {
    //         case 0:
    //             return "Monday"
    //
    //         default:
    //             return "";
    //     }
    // }

}
