import { useEffect, useState, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import * as api from '../api'
import { icons } from "../utils/icons"
import * as actions from '../store/actions'
import moment from 'moment'
import { emitter } from "../utils/Emitter"
var intervalId
export const Player = () => {
    let { songId, isPlaying } = useSelector(state => state.music)
    let [infoSong, setInfoSong] = useState(null)
    let dispatch = useDispatch()
    let [audio, setAudio] = useState(new Audio())
    let thumbRef = useRef()
    let trackRef = useRef()
    let [curTime, setCurTime] = useState(0)

    emitter.on('STOP OR PLAY MUSIC', () => {
        handleClickPlayMusic()
    })
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
                    artistsNames: res1?.data?.data?.artistsNames || null,
                    duration: res1?.data?.data?.duration || 0
                })
            }
            if (res2?.data?.err === 0) {
                audio.pause()
                setAudio(new Audio(res2?.data?.data?.['128'] || ''))
            }
        }
        getSong()
    }, [songId])
    useEffect(() => {
        intervalId && clearInterval(intervalId)

        if (isPlaying) {
            audio.play()
            intervalId = setInterval(() => {
                let percent = Math.round(audio.currentTime * 10000 / infoSong.duration) / 100
                thumbRef.current.style.cssText = `right:${100 - percent}%`
                setCurTime(Math.round(audio.currentTime))
            }, 10)
        }

    }, [audio, isPlaying])
    let handleClickPlayMusic = () => {
        if (isPlaying) {
            audio.pause()
            dispatch(actions.playMusic(false))
        } else {
            audio.play()
            dispatch(actions.playMusic(true))
        }
    }
    let handleClickTrack = (e) => {
        let trackRect = trackRef.current.getBoundingClientRect()
        let percent = Math.round((e.clientX - trackRect.left) * 10000 / trackRect.width) / 100
        thumbRef.current.style.cssText = `right:${100 - percent}%`
        audio.currentTime = percent * infoSong.duration / 100
        setCurTime(Math.round(audio.currentTime))
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
                    <span onClick={() => handleClickPlayMusic()} className="cursor-pointer hover:text-txt-400">{isPlaying === true ? <icons.BiPauseCircle size={35} /> : <icons.BiPlayCircle size={35} />}</span>
                    <span className="cursor-pointer"><icons.MdSkipNext size={25} /></span>
                    <span title="Bật phát lại tất cả" className="cursor-pointer"><icons.FiRepeat size={20} /></span>
                </div>
                <div className="w-full flex items-center justify-center gap-3 text-xs font-semibold">
                    <span className="text-txt-200">{moment.utc(curTime * 1000).format('mm:ss')}</span>
                    <div ref={trackRef} onClick={(e) => handleClickTrack(e)} className="hover:h-[8px] relative w-3/4 rounded-l-full rounded-r-full bg-[rgba(0,0,0,0.1)] h-[3px] cursor-pointer">
                        <div ref={thumbRef} className="absolute top-0 left-0 bottom-0 rounded-l-full rounded-r-full bg-[#0e8080]"></div>
                    </div>
                    <span className="text-txt-300">{moment.utc(infoSong?.duration * 1000).format('mm:ss')}</span>
                </div>
            </div>
            <div className="w-[20%] flex-none">3</div>
        </div>
    )
}
