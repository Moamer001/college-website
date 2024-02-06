import { RiMenu4Line, RiCloseFill } from "react-icons/ri";
import logo from "../assets/logo.png";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            {isMenuOpen && <MobileNavbar setIsMenuOpen={setIsMenuOpen} />}
            <div className="bg-gray-100 sticky top-0 z-10 h-[85px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
                <nav className="max-w-screen-xl mx-auto py-4 px-6">
                    <div className="flex items-center justify-between ">
                        <img
                            src={logo}
                            alt="logo"
                            className="h-11 w-auto object-contain  "
                        />
                        <ul className="hidden md:flex md:gap-14 ">
                            <li>
                                <a className="menu-item">عن الكليه</a>
                            </li>
                            <li>
                                <a className="menu-item">رسالتنا</a>
                            </li>
                            <li>
                                <a className="menu-item">اهدافنا</a>
                            </li>
                            <li>
                                <a className="menu-item">الاقسام العلميه</a>
                            </li>
                            <li>
                                <a className="menu-item">تواصل معنا</a>
                            </li>
                        </ul>
                        <button className="hidden h-10 bg-blue-700 text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-blue-700 md:block">
                            تسجيل الدخول{" "}
                        </button>
                        {/* <button className="hidden h-10 bg-blue-700 text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-blue-700 md:block">الانتساب للكليه</button> */}
                        <button
                            onClick={() => {
                                setIsMenuOpen(true);
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
