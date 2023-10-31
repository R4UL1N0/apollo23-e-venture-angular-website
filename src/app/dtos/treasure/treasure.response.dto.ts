export default class TreasureResponse {
    constructor(
        public id: number,
        public points: number,
        public score: number,
        public token: string,
        public hidden: boolean,
        public event_id: number,
        public activity_id: number
    ) {}
}