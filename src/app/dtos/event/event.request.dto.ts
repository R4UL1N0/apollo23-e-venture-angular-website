export default class EventRequest {

    constructor(init?: Partial<_EventRequest>) {
        Object.assign(this, init);
    }
}

interface _EventRequest {
    name: string
    description: string
    website: string
    street: string
    city: string
    state: string
    street_number: string
    street_add_on: string
    lat: string
    lng: string
    start_date: Date
}
