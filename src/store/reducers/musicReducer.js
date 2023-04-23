import actionTypes from "../actions/actionTypes"
const initState = {
    songId: null,
    isPlaying: false
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
                isPlaying: action.flag || null
            }
        default:
            return state
    }
}
export default musicReducer