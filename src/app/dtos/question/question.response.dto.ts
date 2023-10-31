export default class QuestionResponse {
    constructor(
        public id: number,
        public question_text: string,
        public approved: boolean,
        public user_id: number
    ) {}
}
