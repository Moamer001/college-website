import React from 'react'
import logo from '../assets/logo.png'
import { NAV_ITEM } from '../damyData'

const MobileNavbar = ({ setIsMenuOpen }) => {
    return (
        <div className='w-screen fixed top-0 z-20 '>
            <div className='w-1/2 h-screen flex flex-col p-8 bg-gray-100 ' >
                <img src={logo} alt="logo" className="w-16 object-contain mb-8 " />
                <ul>
                    {NAV_ITEM.map((item, index) => (
                        <li key={index} className="mb-5">
                            <a href={item.link} className="menu-item" onClick={() => { setIsMenuOpen(false) }}>{item.title}</a>
                        </li>
                    ))}
                </ul>

                <button className="h-10 bg-blue-700 text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-blue-700 md:block mb-4">تسجيل الدخول </button>
                <button className="h-10 bg-blue-700 text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-blue-700 md:block">الانتساب للكليه</button>
            </div >
            <div className="w-screen h-screen bg-stone-300 fixed top-0 -z-10" />
        </div >
    )
}

export default MobileNavbar