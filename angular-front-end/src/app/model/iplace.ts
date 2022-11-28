import {Period} from "./period";
import {IPeriod} from "./iperiod";

export interface IPlace {
    id: number;
    name: string;
    address: string,
    periods: IPeriod[]

}
