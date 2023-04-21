import ListSong from "./ListSong"
import { icons } from "../utils/icons"
import { memo } from "react"
import moment from 'moment'
const PlayListRight = (props) => {
    let { playlistData } = props
    return (
        <div className="flex-auto">
            <div className="flex gap-2 text-[14px] mb-[10px]">
                <span className="text-txt-200">Lời tựa</span>
                <span className="text-txt-300 break-words">{playlistData?.description}</span>
            </div>
            <div className="text-txt-200 border-b border-txt-100 p-[10px] pb-4 flex items-center justify-between uppercase text-xs font-semibold">
                <span className="flex flex-1 gap-2 items-center min-w-[290px]"><span><icons.TbArrowsSort /></span> bài hát</span>
                <span className="flex-2 flex justify-start">album</span>
                <span className="flex-1 flex justify-end">thời gian</span>
            </div>
            <ListSong song={playlistData?.song} />
            <div className="mt-4 text-[13px] text-txt-200 flex gap-[2px] items-center">
                <span>{playlistData?.song?.total} bài hát</span>
                <span><icons.BsDot size={20} /></span>
                <span>{moment.utc(playlistData?.song?.totalDuration * 1000).format('h:m').replace(":", " giờ ")} phút</span>
            </div>
        </div>
    )
}
export default memo(PlayListRight)
