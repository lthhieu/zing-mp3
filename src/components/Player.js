import { useEffect, useState, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import * as api from '../api'
import { icons } from "../utils/icons"
import * as actions from '../store/actions'
export const Player = () => {
    let { songId, play } = useSelector(state => state.music)
    let [infoSong, setInfoSong] = useState(null)
    let dispatch = useDispatch()
    let [audio, setAudio] = useState('')
    const audioRef = useRef(new Audio());
    useEffect(() => {
        let getSong = async () => {
            let [res1, res2] = await Promise.all([
                api.getInfoSong(songId),
                api.getSong(songId)
            ])
            if (res1?.data?.err === 0) {
                setInfoSong({
                    thumbnail: res1?.data?.data?.thumbnail || null,
                    title: res1?.data?.data?.title || null,
                    artistsNames: res1?.data?.data?.artistsNames || null
                })
            }
            if (res2?.data?.err === 0) {
                setAudio(res2?.data?.data?.['128'] || '')
            }
        }
        getSong()
    }, [songId])
    useEffect(() => {
        audioRef.current.src = audio
        if (play)
            audioRef.current.play()
    }, [audio])
    let handleClickPlayMusic = () => {
        if (play) {
            audioRef.current.pause()
            dispatch(actions.playMusic(false))
        } else {
            audioRef.current.play()
            dispatch(actions.playMusic(true))
        }
    }
    return (
        <div className="h-full flex w-full items-center justify-center">
            <div className="w-[30%] flex items-center flex-none pl-6 gap-10">
                <div className="flex gap-4 items-center justify-center">
                    <img className="h-16 w-16 object-cover rounded-md" src={infoSong?.thumbnail} alt="ảnh" />
                    <div>
                        <p className='text-fnt-200 text-txt-300 font-sans font-semibold'>{infoSong?.title}</p>
                        <p className="text-fnt-100 text-txt-200 font-sans">{infoSong?.artistsNames}</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <span><icons.AiOutlineHeart size={20} /></span>
                    <span><icons.AiOutlineEllipsis size={20} /></span>
                </div>
            </div>
            <div className="flex-auto flex flex-col gap-2 items-center justify-center">
                <div className="flex gap-4 items-center">
                    <span title="Bật phát ngẫu nhiên" className="cursor-pointer"><icons.RxShuffle size={20} /></span>
                    <span className="cursor-pointer"><icons.MdSkipPrevious size={25} /></span>
                    <span onClick={() => handleClickPlayMusic()} className="cursor-pointer hover:text-txt-400">{play ? <icons.BiPauseCircle size={35} /> : <icons.BiPlayCircle size={35} />}</span>
                    <span className="cursor-pointer"><icons.MdSkipNext size={25} /></span>
                    <span title="Bật phát lại tất cả" className="cursor-pointer"><icons.FiRepeat size={20} /></span>
                </div>
                <div>bar</div>
            </div>
            <div className="w-[20%] flex-none">3</div>
        </div>
    )
}
