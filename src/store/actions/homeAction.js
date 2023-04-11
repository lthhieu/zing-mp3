import actionTypes from "./actionTypes"
import * as api from '../../api'

export const getBanner = () => async (dispatch) => {
    try {
        let res = await api.getHome()
        if (res?.data?.err === 0) {
            dispatch({
                type: actionTypes.GET_HOME,
                homeData: res.data.data.items
            })
        } else {
            dispatch({
                type: actionTypes.GET_HOME,
                homeData: null
            })
        }
    } catch (e) {
        dispatch({
            type: actionTypes.GET_HOME,
            homeData: null
        })
    }
}