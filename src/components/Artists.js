import { memo } from "react"
import { icons } from "../utils/icons"
const Artists = (props) => {
    let { artists } = props
    return (
        <div className="flex flex-col gap-10">
            <span className="capitalize font-bold text-[20px] text-txt-300">Nghệ sĩ tham gia</span>
            <div className="flex">
                {artists?.length > 0 && artists.map((item, index) => {
                    return (<div className="flex flex-col px-[14px] items-center justify-center" key={index}>
                        <img className="cursor-pointer w-[210px] h-[210px] rounded-full" src={item.thumbnailM} alt="thumbnailM" />
                        <p className="pt-5 text-sm text-txt-300">{item.name}</p>
                        <p className="pt-1 text-xs text-txt-200">{item?.totalFollow.toString().length >= 4 ?
                            item?.totalFollow.toString().slice(0, -3) + "K" : item?.totalFollow} quan tâm</p>
                        <button className="hover:bg-main-600 flex items-center text-xs justify-center bg-main-500 text-white py-[6px] px-[19px] rounded-full mt-4 uppercase">
                            <span><icons.SlUserFollow size={18} /></span>&nbsp;quan tâm</button>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default memo(Artists)