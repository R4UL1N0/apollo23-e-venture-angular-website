export default class UserResponse {
    constructor(
        public id: number,
        public name: string,
        public profile_pic: string,
        public bio: string,
        public instagram: string,
        public linked_in: string,
        public email: string,
        public mobile: string,
    ) {}
}
