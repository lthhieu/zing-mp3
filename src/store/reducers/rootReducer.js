import homeReducer from "./homeReducer"
import musicReducer from "./musicReducer"
import { combineReducers } from "redux"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const persistConfig = {
    storage,
    stateReconciler: autoMergeLevel2
}

const persistMusicReducer = {
    ...persistConfig,
    key: 'music',
    whitelist: ['songId']
}

const rootReducer = combineReducers({
    home: homeReducer,
    music: persistReducer(persistMusicReducer, musicReducer)
})
export default rootReducer