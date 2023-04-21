import rootReducer from './store/reducers/rootReducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'

const reduxConfig = () => {
    let store = createStore(rootReducer, applyMiddleware(thunk))
    let persistor = persistStore(store)
    return { store, persistor }
}
export default reduxConfig