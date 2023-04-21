import Logo from '../assets/logo.svg'
import { sidebarMenu } from '../utils/menu'
import { Link, NavLink } from 'react-router-dom'
import { path } from '../utils/path'
const notActive = 'hover:text-txt-400 flex gap-2 items-center text-txt-300 text-[13px] py-2 px-6 font-sans'
const active = 'border-l-[3px] border-main-500 bg-main-100 flex gap-2 items-center text-txt-400 text-[13px] py-2 px-6 font-sans'
export const SidebarLeft = () => {
    return (
        <div className='h-full flex flex-col'>
            <Link to={path.HOME} className='h-[70px] flex items-center justify-start px-6 cursor-pointer'>
                <img src={Logo} alt='Logo' className='h-10 w-[140px]' />
            </Link>
            <div>
                {sidebarMenu?.length > 0 ? sidebarMenu.map(item => (
                    <NavLink key={item.path} to={item.path} className={({ isActive }) => isActive ? active : notActive}>{item.icon} <span className='font-bold'>{item.title}</span></NavLink>
                )) : <></>}
            </div>
        </div>
    )
}
