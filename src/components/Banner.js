import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import * as actions from '../store/actions'
import { useNavigate } from "react-router-dom"
import { emitter } from "../utils/Emitter"
export const Banner = () => {
    useEffect(() => {
        let bannerItems = document.getElementsByClassName('handle-banner-items')
        let listBanner = [0, 1, 2, 3, 4, 5]
        let len = listBanner.length
        let listDisplay = []
        let i = 1
        let interValId = setInterval(() => {
            // lần x: 0,1,2 => lần x+1: 1,2,3
            listDisplay.push(listBanner[i % len], listBanner[(i + 1) % len], listBanner[(i + 2) % len])
            let listDisplayCopy = listDisplay
            for (let j = 0; j < bannerItems.length; j++) {
                // xóa những class animation
                bannerItems[j]?.classList?.remove('animate-slide-right', 'order-last', 'z-10')
                bannerItems[j]?.classList?.remove('animate-slide-left-1', 'order-first', 'z-20')
                bannerItems[j]?.classList?.remove('animate-slide-left-2', 'order-2', 'z-20')
                // [0,1,2] hiện; [3,4,5] ẩn
                if (listDisplay.some(item => item === j)) {
                    bannerItems[j].style.cssText = `display:block`
                } else {
                    bannerItems[j].style.cssText = `display:none`
                }
            }
            // thêm class animation
            listDisplay.forEach(item => {
                if (item === listDisplayCopy[listDisplayCopy.length - 1]) {
                    bannerItems[item]?.classList?.add('animate-slide-right', 'order-last', 'z-10')
                } else if (item === listDisplayCopy[0]) {
                    bannerItems[item]?.classList?.add('animate-slide-left-1', 'order-first', 'z-20')
                } else {
                    bannerItems[item]?.classList?.add('animate-slide-left-2', 'order-2', 'z-20')
                }
            })
            // tăng i: 1 -> 2
            i++
            // reset mảng hiển thị
            listDisplay.splice(0, listDisplay.length)

        }, 4000)
        return () => {
            interValId && clearInterval(interValId);
        }
    }, [])
    let navigate = useNavigate()
    let { banner } = useSelector(state => state.home)
    let { songId } = useSelector(state => state.music)
    let dispatch = useDispatch()
    let handleClickBanner = (item) => {
        if (item?.type === 1) {
            dispatch(actions.setSongId(item.encodeId))
            emitter.emit('STOP OR PLAY MUSIC')
        } else if (item?.type === 4) {
            let path = item?.link?.split('.')[0]
            navigate(path)
        }
    }
    return (
        <div className="w-full flex gap-6 overflow-hidden">
            {banner?.map(item => (
                <img onClick={() => handleClickBanner(item)} src={item.banner} className="handle-banner-items w-[31%] h-auto rounded-lg cursor-pointer" key={item.encodeId} />
            ))}
        </div>
    )
}
