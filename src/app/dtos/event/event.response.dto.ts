export class EventResponse {

    constructor(
        public id: number,
        public name: string,
        public description: string,
        public website: string,
        public street: string,
        public city: string,
        public state: string,
        public street_number: string,
        public street_add_on: string,
        public lat: string,
        public lng: string,
        public start_date: Date
    ) {}
}