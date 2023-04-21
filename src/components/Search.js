import { icons } from "../utils/icons"
import { useState } from "react"
export const Search = () => {
    let [inputValue, setInputValue] = useState('')
    let clearInput = () => {
        setInputValue('')
    }
    return (
        <div className="flex items-center">
            <span className="text-txt-200 bg-main-200 h-10 flex items-center justify-center rounded-l-[20px] py-2 px-3"><icons.AiOutlineSearch size={20} /></span>
            <input value={inputValue} onChange={e => setInputValue(e.target.value)}
                className="outline-none bg-main-200  py-2 h-10 w-full text-txt-200"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                type="text" />
            <span onClick={clearInput} className="flex items-center justify-center h-10 rounded-r-[20px] text-txt-200 bg-main-200 px-3 cursor-pointer">
                <span className={inputValue !== '' ? '' : 'hidden'}><icons.MdOutlineClear size={20} />
                </span>
            </span>
        </div>
    )
}
