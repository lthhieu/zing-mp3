import * as components from '../../components'
import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import * as actions from '../../store/actions'
export const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.getBanner())
    }, [])
    return (
        <div className="">
            <div><components.Banner /></div>
        </div>
    )
}
