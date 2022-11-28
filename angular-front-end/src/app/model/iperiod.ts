export interface IPeriod {
    id: number;
    day: number;
    start: Date;
    end: Date;

    getDay?(): string;
}
