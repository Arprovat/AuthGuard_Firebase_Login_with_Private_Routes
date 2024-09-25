import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Auth_context } from "../Private-auth/Private_auth";
import profile from '../profile/UserProfile';

const Navbar = () => {
    const { User, SignOUt } = useContext(Auth_context)
    const navList = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/signUp'>SignUp</NavLink></li>
        {
            User && <li><NavLink to='/profile'>profile</NavLink></li>

        }

    </>
    const handledSignOut = () => {
        SignOUt()
        .then(()=>{
            console.log('sign out')
        })
        .catch(err => {
            console.log(err.message)
        })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navList
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navList}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    User && <p>
                        {User.email}
                    </p>

                }
                <a onClick={handledSignOut} className="btn">Sing Out</a>
            </div>
        </div>
    );
};

export default Navbar;