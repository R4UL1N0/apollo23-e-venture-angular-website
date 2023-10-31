import { Time } from "@angular/common";

export default class ActivityResponse {

    constructor(
        public id: number,
        public event_id: number,
        public type: string,
        public name: string,
        public description: string,
        public date: Date,
        public start_time: Time,
        public end_time: Time,
        public location: string,
        public lat: number,
        public lng: number
    ) {}
}