
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../authprovider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
    
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    const handleSingOut = () => {
        logOut()
            .then()
            .catch()
    }
    const navLink = <>
        <a className="lg:text-lg mr-5 font-semibold text-[#6BCF82]">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#063B29]" : ""
                }
            >
                Home
            </NavLink>
        </a>
        <a className="lg:text-lg mr-5 font-semibold text-[#6BCF82]">
            <NavLink
                to="/services"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#063B29]" : ""
                }
            >
                Services
            </NavLink>
        </a>
        <a className="lg:text-lg  mr-5 font-semibold text-[#6BCF82]">
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#063B29]" : ""
                }
            >
                About Us
            </NavLink>
        </a>
        <a className="lg:text-lg mr-5 font-semibold text-[#6BCF82]">
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#063B29]" : ""
                }
            >
                Contact
            </NavLink>
        </a>
    </>
    return (
        <div>
            <div className="navbar mt-5 mb-10 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-[#063B29] to-[#6BCF82] inline-block text-transparent bg-clip-text">edutech</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    { 
                        
                        user ? <button onClick={handleSingOut} className="btn w-32 capitalize hover:bg-[#063B29] text-white bg-[#063B29] text-white">Sing Out</button> :
                            <Link to='/login'>
                                <button className="btn hover:bg-[#063B29] capitalize px-6 bg-[#063B29] text-white">Login</button>
                            </Link>
                    }
                    
                </div>

            </div>
        </div>
    );
};

export default Navbar;

