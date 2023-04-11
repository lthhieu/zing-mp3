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
        <div className="overflow-y-auto px">
            <div className="h-[70px] px-[2.5%] flex items-center"><components.Header /></div>
            <div className='px-[2.5%] pt-[2.5%]'><components.Banner /></div>
        </div>
    )
}
