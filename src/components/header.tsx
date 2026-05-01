import { Menu } from "lucide-react"
import logo from "../assets/images/logo.png"
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Header = () => {
    const [menu, toggleMenu] = useState<boolean>(false);
    return (
        <>
            <nav className="h-20 w-full flex justify-between shadow-xl sticky z-1000 top-0 backdrop-blur-2xl md:px-10 px-1">
                <NavLink to={"../"}  className="lg:w-[20%]r">
                    <div className="w-full h-full flex items-center justify-center">
                        <img src={logo} alt="logo" className="h-full " />
                        <p className="text-blue-900 font-bold">AlexBello Foundation</p>
                    </div>
                </NavLink>
                <ul className="lg:flex hidden justify-center items-center text-[20px] text-blue-800 font-medium gap-10 w-[70%]">
                    <li><NavLink to={"../empowerment_schemes"}>Empowerment schemes</NavLink></li>
                    <li><NavLink to={"../events"}>News & Events</NavLink></li>
                    <li><NavLink to={"../donate"}>Donate</NavLink></li>
                    <li><NavLink to={"../contact_us"}>Contact us</NavLink></li>
                </ul>
                <button className="lg:hidden px-5" onClick={() => toggleMenu(!menu)}><Menu /></button>
            </nav>
            <div className={`${menu ? "translate-x-0" : "translate-x-full"} fixed lg:hidden duration-700 transition-transform transform flex justify-end w-full z-50 h-screen backdrop-blur-2xl top-20`} onClick={() => toggleMenu(false)}>
                <div className="w-[70%] h-full border-white translate- p-5 bg-blue-950 backdrop-blur-2xl">
                    <ul className="w-full space-y-3 lg:hidden font-medium flex flex-col gap-7.5 text-white text-[20px] font-inter justify-between">
                        <li><NavLink to={"../empowerment_schemes"}>Empowerment schemes</NavLink></li>
                        <li><NavLink to={"../events"}>News & Events</NavLink></li>
                        <li><NavLink to={"../donate"}>Donate</NavLink></li>
                        <li><NavLink to={"../contact_us"}>Contact us</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;