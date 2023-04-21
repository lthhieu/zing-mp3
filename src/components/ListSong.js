import { icons } from "../utils/icons"
import { memo, useEffect } from "react"
import moment from 'moment'
import { useDispatch } from "react-redux"
import * as actions from '../store/actions'
import * as api from '../api'
const ListSong = (props) => {
    let { song } = props
    console.log(song)
    let dispatch = useDispatch()
    useEffect(() => {
        let isVip = async (item) => {
            let res = await api.getSong(item?.encodeId)
            if (res?.data?.err === -1150) {
                item["VIP"] = 1
            } else if (res?.data?.err === 0) {
                item["VIP"] = 0
            }
        }
        for (let i = 0; i < song?.items?.length; i++) {
            isVip(song?.items[i])
        }
    }, [song])
    let click = (vip, id) => {
        if (vip === 0) {
            dispatch(actions.setSongId(id))
            dispatch(actions.playMusic(true))
        } else {
            alert('Tài khoản VIP mới được nghe!')
        }

    }
    return (<> {song?.items?.length > 0 &&
        song?.items.map((item, index) => {
            return (
                <div onDoubleClick={() => click(item?.VIP, item?.encodeId)} key={index} className="hover:bg-main-200 text-txt-200 border-b border-txt-100 p-[10px] pb-4 flex items-center justify-between text-xs">
                    <span className="flex-1 flex gap-2 items-center min-w-[290px]"><span><icons.BsMusicNoteBeamed /></span>
                        <img onClick={() => click(item?.VIP, item?.encodeId)} className="cursor-pointer w-10 h-10 rounded-md object-cover" alt="thumbnail" src={item.thumbnail} />
                        <span className="flex flex-col gap-1">
                            <span className="flex">
                                <span className="text-txt-300 font-semibold text-[14px]">{item?.title?.length >= 20 ?
                                    `${item?.title.slice(0, 20)}...` : item?.title}</span>
                                {item?.VIP === 1 && <span className="ml-1 bg-yellow-400 rounded-md px-2 font-semibold">VIP</span>}
                            </span>

                            <span>{item.artistsNames?.length >= 30 ?
                                `${item.artistsNames.slice(0, 30)}...` : item.artistsNames}</span></span></span>
                    <span className="flex-2 flex justify-start">{item.album?.title}</span>
                    <span className="flex-1 justify-end flex">{moment.utc(item?.duration * 1000).format('mm:ss')}</span>
                </div>
            )
        })}</>
    )
}
export default memo(ListSong)
