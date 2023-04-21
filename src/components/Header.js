import { icons } from "../utils/icons"
import { Search } from "./Search"
export const Header = () => {
    return (
        <div className="flex justify-between w-full items-center">
            <div className="flex gap-6 items-center w-[90%]">
                <div className="flex text-txt-100 gap-1 w-[10%]">
                    <span><icons.BsArrowLeft size={24} /></span>&nbsp;
                    <span><icons.BsArrowRight size={24} /></span></div>
                <div className="w-[90%]">
                    <Search />
                </div>
            </div>
            <div className="w-[10%] flex justify-end">
                <span title="Đăng nhập" className="text-txt-200 cursor-pointer">
                    <icons.BiLogInCircle size={24} />
                </span>
            </div>
        </div>
    )
}
