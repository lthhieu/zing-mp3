import { Outlet } from 'react-router-dom'
import * as components from '../../components'
export const Public = () => {
    return (
        <div className='w-full flex bg-[#cdd8d8]'>
            <div className='w-[240px] flex-none bg-[#cce0e0]'><components.SidebarLeft /></div>
            <div className='flex-auto'><Outlet /></div>
            <div className='w-[330px] flex-none border-x-indigo-500'><components.SidebarRight /></div>
        </div>
    )
}
