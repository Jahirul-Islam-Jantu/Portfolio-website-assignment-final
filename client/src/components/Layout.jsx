import {Link, NavLink} from "react-router-dom";
import Cookies from "js-cookie";
import {logOutUser} from "../apiCalls/apiCalls.js";
import {useState} from "react";
import Loader from "./Loader.jsx";

const Layout = () => {

    const [loading, setLoading] = useState(false);
    let isLogin = Cookies.get("token");

    const onLogout = async () => {
        setLoading(true);
         let result = await logOutUser()
        if (result) {
            window.location.href = "/";
            setLoading(false);
        }
    }


    return (

        <section>
            {loading && <Loader/>}
            <section className="bg-purple-50 shadow-md dark:bg-dark flex   h-[80px]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-[30px] items-center">
                        <div className="col-span-2">
                            <div >
                                <Link to="/"><img src="logo.png" className="w-[80px]" alt="Logo"/></Link>
                            </div>
                        </div>
                        <div className="col-span-7   ">
                            <nav className="flex justify-center" >
                                <ul className="flex  gap-[15px]">
                                    <li><NavLink
                                        className={({isActive}) => (isActive ? "px-[1rem] py-[0.6rem] bg-gray-700  rounded-xl text-white hover:text-slate-500 hover:bg-gray-200" : "px-[1rem] py-[0.6rem] bg-gray-200  rounded-xl")}
                                        to={"/"}>Home</NavLink></li>
                                    <li><NavLink
                                        className={({isActive}) => (isActive ? "px-[1rem] py-[0.6rem] bg-gray-700  rounded-xl text-white hover:text-slate-500 hover:bg-gray-200" : "px-[1rem] py-[0.6rem] bg-gray-200  rounded-xl")}
                                        to={"/aboutus"}>About Us</NavLink></li>
                                    <li><NavLink
                                        className={({isActive}) => (isActive ? "px-[1rem] py-[0.6rem] bg-gray-700  rounded-xl text-white hover:text-slate-500 hover:bg-gray-200" : "px-[1rem] py-[0.6rem] bg-gray-200  rounded-xl")}
                                        to={"/blogs"}>All Blogs</NavLink></li>
                                    <li><NavLink
                                        className={({isActive}) => (isActive ? "px-[1rem] py-[0.6rem] bg-gray-700  rounded-xl text-white hover:text-slate-500 hover:bg-gray-200" : "px-[1rem] py-[0.6rem] bg-gray-200  rounded-xl")}
                                        to={"/services"}>Services</NavLink></li>
                                    <li><NavLink
                                        className={({isActive}) => (isActive ? "px-[1rem] py-[0.6rem] bg-gray-700  rounded-xl text-white hover:text-slate-500 hover:bg-gray-200" : "px-[1rem] py-[0.6rem] bg-gray-200  rounded-xl")}
                                        to={"/contact"}>Contact</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-span-3">
                            {
                                !!isLogin === true ? (<div className=" flex  gap-[30px]">
                                    <Link onClick={onLogout}
                                          className="bg-red-700 text-white rounded-xl px-[1rem] py-[0.5rem]">LogOut </Link>
                                    <Link to="/dashboard"
                                          className="bg-purple-700 text-white rounded-xl px-[1rem] py-[0.5rem]">Go Dashboard </Link>
                                </div>) : (<div></div>)
                            }

                        </div>
                    </div>
                </div>
            </section>
        </section>

    );
};

export default Layout;