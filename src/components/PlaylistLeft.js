import { icons } from "../utils/icons"
import { memo } from "react"
import moment from 'moment'
const PlaylistLeft = (props) => {
    let { playlistData } = props
    return (
        <div className="flex-none w-1/3 flex flex-col gap-1 items-center justify-start">
            <img className="rounded-md w-[300px] h-[300px] object-contain shadow-md" src={playlistData?.thumbnailM} alt="thumbnailM" />
            <p className="mt-2 text-xl font-bold text-txt-300">{playlistData?.title}</p>
            <div className="text-txt-200 text-[12px] flex flex-col items-center justify-center">
                <p className="">Cập nhật: {moment.unix(playlistData?.contentLastUpdate).format("DD/MM/YYYY")}</p>
                <p>{playlistData?.artistsNames}</p>
                <p>{playlistData?.like.toString().length >= 4 ?
                    playlistData?.like.toString().slice(0, -3) + "K" : playlistData?.like} người yêu thích</p>
            </div>
            <button className="hover:bg-main-600 flex items-center justify-center bg-main-500 text-white py-1 px-6 rounded-full mt-2 uppercase">
                <span><icons.BsFillPlayFill size={20} /></span>Phát tất cả</button>
            <div className="flex gap-2 mt-3">
                <div className="bg-main-200 rounded-full flex items-center justify-center w-[30px] h-[30px]"><icons.AiOutlineHeart /></div>
                <div className="bg-main-200 rounded-full flex items-center justify-center w-[30px] h-[30px]"><icons.AiOutlineEllipsis /></div>
            </div>

        </div>
    )
}
export default memo(PlaylistLeft)
