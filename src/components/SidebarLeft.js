import Logo from '../assets/logo.svg'
import { sidebarMenu } from '../utils/menu'
import { NavLink } from 'react-router-dom'
const notActive = 'flex gap-2 items-center text-[#32323d] text-[13px] py-2 px-6'
const active = 'border-l-[3px] border-[#0e8080] bg-[#e7eded] flex gap-2 items-center text-[#0f7070] text-[13px] py-2 px-6'
export const SidebarLeft = () => {
    return (
        <div className='flex flex-col'>
            <div className='h-[70px] flex items-center justify-start px-6'>
                <img src={Logo} alt='Logo' className='h-10 w-[140px]' />
            </div>
            <div>
                {sidebarMenu?.length > 0 ? sidebarMenu.map(item => (
                    <NavLink key={item.path} to={item.path} className={({ isActive }) => isActive ? active : notActive}>{item.icon} <span className='font-bold'>{item.title}</span></NavLink>
                )) : <></>}
            </div>
        </div>
    )
}
