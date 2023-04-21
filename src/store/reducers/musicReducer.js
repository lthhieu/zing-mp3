import actionTypes from "../actions/actionTypes"
const initState = {
    songId: null,
    play: false
}
const musicReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_SONG_ID:
            return {
                ...state,
                songId: action.id || null
            }
        case actionTypes.PLAY_MUSIC:
            return {
                ...state,
                play: action.flag || null
            }
        default:
            return state
    }
}
export default musicReducer