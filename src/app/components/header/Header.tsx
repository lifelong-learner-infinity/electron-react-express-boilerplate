import React from "react";
import { Link, useLocation } from "react-router-dom";

const linkClass = "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300";
const activeClass = "p-2 lg:px-4 md:mx-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300";

export default function Header() {
    const { pathname }  = useLocation();
    const [_path, currPath] = pathname.split("/");

    return (
        <div className="header-2">
            <nav className="bg-blue-500 py-2 md:py-4">
                <div className="container px-4 mx-auto md:flex md:items-center">
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-xl text-white">Boilerplate Dashboard</span>
                    </div>

                    <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                        <Link to="/" className={currPath === "" ? activeClass : linkClass}>Home</Link>
                        <Link to="/about" className={currPath === "about" ? activeClass : linkClass}>About</Link>
                    </div>
                </div>
            </nav>

        </div>
    )
}