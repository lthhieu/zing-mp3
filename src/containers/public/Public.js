import { Outlet } from 'react-router-dom'
import * as components from '../../components'
export const Public = () => {
    return (
        <div className='relative w-full h-screen flex flex-col bg-main-300'>
            <div className='w-full h-full flex flex-auto z-30'>
                <div className='w-[20%] flex-none bg-main-200'><components.SidebarLeft /></div>
                <div className='flex-auto flex flex-col z-30'>
                    <div className="h-[70px] px-[2.5%] flex items-center"><components.Header /></div>
                    <div className='px-[2.5%] pt-[2.5%] flex-auto'><Outlet /></div>
                </div>
                {/* <div className='w-[20%] flex-none border-l border-red-500 '><components.SidebarRight /></div> */}
            </div>

            <div className='fixed bottom-0 left-0 right-0 h-[90px] bg-main-400 z-50'><components.Player /></div>
        </div>
    )
}
