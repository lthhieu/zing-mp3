import { icons } from "../utils/icons"
import { memo } from "react"
import moment from 'moment'
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../store/actions'
import { emitter } from "../utils/Emitter"
import { toast } from 'react-toastify'
import * as api from '../api'
const ListSong = (props) => {
    let { song } = props
    let { songId } = useSelector(state => state.music)
    // let [songs, setSongs] = useState(null)
    // let [updatedSong, setUpdatedSong] = useState([])

    // useEffect(() => {
    //     setSongs(song)
    // }, [song])
    // let setVip = async (item) => {
    //     let res = await api.getSong(item.encodeId)
    //     let updatedItem = { ...item }
    //     if (res?.data?.err === -1150) {
    //         updatedItem.vip = 1
    //     } else if (res?.data?.err === 0) {
    //         updatedItem.vip = 0
    //     }
    //     return updatedItem
    // }
    // let updateSongs = async () => {
    //     let updatedItems = []
    //     for (let i = 0; i < songs?.items?.length; i++) {
    //         updatedItems.push(await setVip(songs?.items[i]))
    //     }
    //     setUpdatedSong((prev) => updatedItems)

    // }
    // useEffect(() => {
    //     updateSongs()
    // }, [songs])
    let render = (song) => {
        if (song?.items?.length > 0) {
            return (song?.items?.map((item, index) => {
                return (
                    <div onDoubleClick={() => click(item?.encodeId)} key={index} className="hover:bg-main-200 text-txt-200 border-b border-txt-100 p-[10px] pb-4 flex items-center justify-between text-xs">
                        <span className="flex-1 flex gap-2 items-center min-w-[290px]"><span><icons.BsMusicNoteBeamed /></span>
                            <img onClick={() => click(item?.encodeId)} className="cursor-pointer w-10 h-10 rounded-md object-cover" alt="thumbnail" src={item.thumbnail} />
                            <span className="flex flex-col gap-1">
                                <span className="flex">
                                    <span className="text-txt-300 font-semibold text-[14px]">{item?.title?.length >= 20 ?
                                        `${item?.title.slice(0, 20)}...` : item?.title}</span>
                                </span>

                                <span>{item.artistsNames?.length >= 30 ?
                                    `${item.artistsNames.slice(0, 30)}...` : item.artistsNames}</span></span></span>
                        <span className="flex-2 flex justify-start">{item.album?.title}</span>
                        <span className="flex-1 justify-end flex">{moment.utc(item?.duration * 1000).format('mm:ss')}</span>
                    </div>
                )
            }))
        } else {
            return null
        }
    }
    let dispatch = useDispatch()
    let click = async (id) => {
        if (id === songId) {
            emitter.emit('STOP OR PLAY MUSIC')
        } else {
            let res = await api.getSong(id)
            if (res?.data?.err === 0) {
                dispatch(actions.setSongId(id))
                dispatch(actions.playMusic(true))
            } else {
                toast.warn(res?.data?.msg)
            }

        }
    }

    // let click = (vip, id) => {
    //     if (vip === 0) {
    //         dispatch(actions.setSongId(id))
    //         dispatch(actions.playMusic(true))
    //     } else {
    //         alert('Tài khoản VIP mới được nghe!')
    //     }

    // }
    // console.log(song)
    return (<>{render(song)}</>)

    // return (<> {song?.items?.length > 0 &&
    //     song?.items?.map((item, index) => {
    //         // console.log("song>>>", song)
    //         return (

    //             <div onDoubleClick={() => click(item?.vip, item?.encodeId)} key={index} className="hover:bg-main-200 text-txt-200 border-b border-txt-100 p-[10px] pb-4 flex items-center justify-between text-xs">
    //                 {item?.vip ?? console.log(item?.vip)}
    //                 <span className="flex-1 flex gap-2 items-center min-w-[290px]"><span><icons.BsMusicNoteBeamed /></span>
    //                     <img onClick={() => click(item?.vip, item?.encodeId)} className="cursor-pointer w-10 h-10 rounded-md object-cover" alt="thumbnail" src={item.thumbnail} />
    //                     <span className="flex flex-col gap-1">
    //                         <span className="flex">
    //                             <span className="text-txt-300 font-semibold text-[14px]">{item?.title?.length >= 20 ?
    //                                 `${item?.title.slice(0, 20)}...` : item?.title}</span>
    //                             {item?.vip === 1 && <span className="ml-1 bg-yellow-400 rounded-md px-2 font-semibold">VIP</span>}
    //                         </span>

    //                         <span>{item.artistsNames?.length >= 30 ?
    //                             `${item.artistsNames.slice(0, 30)}...` : item.artistsNames}</span></span></span>
    //                 <span className="flex-2 flex justify-start">{item.album?.title}</span>
    //                 <span className="flex-1 justify-end flex">{moment.utc(item?.duration * 1000).format('mm:ss')}</span>
    //             </div>
    //         )
    //     })}</>
    // )
}
export default memo(ListSong)
