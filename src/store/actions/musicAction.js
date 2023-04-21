import actionTypes from "./actionTypes"
import * as api from '../../api'

export const setSongId = (id) => ({
    type: actionTypes.SET_SONG_ID,
    id
})

export const playMusic = (flag) => ({
    type: actionTypes.PLAY_MUSIC,
    flag
})