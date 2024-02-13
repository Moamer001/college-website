import { RiMenu4Line, RiCloseFill } from "react-icons/ri";
import logo from "../assets/logo.png";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import { NAV_ITEM } from "../damyData";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            {isMenuOpen && <MobileNavbar setIsMenuOpen={setIsMenuOpen} />}
            <div className="h-24 z-50 w-full fixed bg-gray-100   sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
                <nav className="max-w-screen-xl mx-auto py-4 px-6">
                    <div className="flex items-center justify-between ">
                        <img
                            src={logo}
                            alt="logo"
                            className="h-11 w-auto object-contain  "
                        />
                        <ul className="hidden md:flex md:gap-14 ">
                            {NAV_ITEM.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link} className="menu-item">{item.title}</a>
                                </li>
                            ))}

                        </ul>
                        <button className="hidden h-10 bg-blue-700 text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-blue-700 md:block">
                            تسجيل الدخول{" "}
                        </button>
                        {/* <button className="hidden h-10 bg-blue-700 text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-blue-700 md:block">الانتساب للكليه</button> */}
                        <button
                            onClick={() => {
                                setIsMenuOpen(prev => !prev);
                            }}
                            className="w-11 h-11 bg-blue-100 text-2xl text-blue-700 flex items-center justify-center rounded md:hidden z-50"
                        >
                            {isMenuOpen ? <RiCloseFill /> : <RiMenu4Line />}
                        </button>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
