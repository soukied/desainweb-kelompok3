import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import './styles/login.css';

export default function Login({history}) {

    let inputClass = "bg-black rounded-xl p-1 pl-3 mb-2 text-white";

    return (
    <div className="flex flex-col h-screen bg-gray-400">
        <div className="p-2">
            <button onMouseUp={()=>history.goBack()}><img src="/back.svg" className="w-10 bg-white hover:bg-gray-200 rounded-3xl shadow-lg p-2"/></button>
        </div>
        <div className="flex justify-center items-center flex-grow mb-5">
            <div className="flex focus:border-0 flex-col shadow-lg items-center rounded-xl justify-around bg-white w-30 px-20 py-20 my-5">
                <h1 className="mb-8 font-bold text-2xl">Login Admin</h1>
                <input className={inputClass} type="text" placeholder="Username" />
                <input className={inputClass} type="password" placeholder="Password" />
                <Link style={{fontSize:"14px"}} className="text-black hover:underline" to="">Lupa password</Link>
                <button className="px-4 py-2 hover:bg-gray-900 rounded-md mt-2 bg-black text-white hover:text-gray-300 font-bold">Login</button>
            </div>
        </div>
    <Footer/>
    </div>
        );
}