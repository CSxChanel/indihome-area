// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link , NavLink} from "react-router-dom";
import { AiOutlineMenuUnfold, AiOutlineVerticalLeft } from "react-icons/ai";

import "./Navbar.css";
//NavLinks
import { NavLinks } from "../../services/Nav-Link.js";
import Logo from "../../assets/img/Logo_indiHome.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    //Nav
    const Nav = () => {
        return (
            <>
                {NavLinks.map(link => {
                    return (
                        <div key={link.id} className="">
                            <NavLink
                                className={`px-3 py-1 hover:border hover:text-slate-100 hover:bg-rose-600 hover:rounded-full
                                ${({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active"
                                        : ""}
                                `}
                                to={link.path}
                                end
                            >
                                {link.text}
                            </NavLink>
                        </div>
                    );
                })}
            </>
        );
    };
    //Navbar.jsx
    return (
        <div>
            <div className="navbar fixed top-0 left-0 w-full p-4 flex justify-between items-center z-20 bg-slate-50 border-b border-b-rose-400">
                <Link to="/">
                    <img
                        src={Logo}
                        alt="Logo_indihome"
                        className="h-[50px] w-[170px]"
                    />
                </Link>
                <div>
                    <div className="nav font-semibold lg:flex lg:flex-1 lg:gap-x-5 lg:items-center hidden">
                        <Nav />
                    </div>
                    <button
                        onClick={toggleMenu}
                        className="text-3xl focus:outline-none z-30 lg:hidden"
                    >
                        {isOpen ? (
                            <AiOutlineVerticalLeft />
                        ) : (
                            <AiOutlineMenuUnfold />
                        )}
                    </button>
                </div>
            </div>
            <div
                className={`fixed top-20 right-0 h-full w-full bg-white/50 backdrop-blur ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-500 ease-in-out z-10 overflow-y-scroll`}
            >
                <div className="toggleNav flex flex-col items-center my-10 gap-y-10 text-xl font-semibold font-primary">
                    <Nav />
                </div>
                <div className="w-[50%] mx-auto border rounded-2xl bg-rose-600 text-center text-slate-50 py-2 font-bold hover:bg-rose-700 hover:text-slate-100 animate-bounce">
                    <button>Berlangganan</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
