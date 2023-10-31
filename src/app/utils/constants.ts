export class Constants {
    static isProd = false
    static BASE_URL = this.isProd ? 'http://18.206.192.197:8000/api' : 'http://localhost:8080/api'
    static USERS_ENDPOINT = '/users'
    static EVENTS_ENDPOINT = '/events'
    static ACTIVITIES_ENDPOINT = '/activities'
    static SPEAKERS_ENDPOINT = '/speakers'
    static TREASURES_ENDPOINT = '/treasures'
    static QUESTIONS_ENDPOINT = '/questions'
    static ICONS_LIST = ['✅', '🌟', '💯', '✍️', '⌛', '🗿', '🎁', '📷', 
        '✏️', '🥂', '🏅', '🌒', '🌐', '👍', '🏠', '🏁', '🎲', '🎯', '🏆', 
        '❤️', '☑️', '🧠', '👋', '👌', '🧩', '🎰', '🔮', '🗡️', '💎', '⏰',
        '🎓', '🎖️', '🌎', '📅', '🥳']

}