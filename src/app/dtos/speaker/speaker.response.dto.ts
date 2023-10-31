export default class SpeakerResponse {
    constructor(
        public id: number,
        public event_id: number,
        public activity_id: number,
        public mini_bio: string,
        public social_media: string
    ) {}
}