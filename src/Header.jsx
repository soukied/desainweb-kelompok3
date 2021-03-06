import React, {useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import "./styles/header.css";

export default ({lambang, to, history, children, query}) => {
    const inputElement = useRef();
    const [hideNav, setHideNav] = useState(true);
    const [hideSearch, setHideSearch] = useState(true);
    const navs = [
        {text:"Kalimantan Timur", url:"/provinsi/kalimantan-timur"},
        {text:"Kalimantan Barat", url:"/provinsi/kalimantan-barat"},
        {text:"Kalimantan Tengah", url:"/provinsi/kalimantan-tengah"},
        {text:"Kalimantan Utara", url:"/provinsi/kalimantan-utara"},
        {text:"Kalimantan Selatan", url:"/provinsi/kalimantan-selatan"},
        {text:"About", url:"/about"},

    ]

    useEffect(()=>{
        if (typeof query == "string") {
            inputElement.current.value = query;
            setHideSearch(false);
        }
        document.title = children ? `${children} | Borneo Culture Wiki` : "Borneo Culture Wiki";
    },[]);
    return (
    <header className="shadow-lg py-2 bg-white mb-3">

        <div className="flex justify-between px-5 py-2 items-center">
            <div className="flex-1 w-2">
                <button onMouseUp={()=>{setHideNav(!hideNav);setHideSearch(true);}}>
                    {!hideNav?<img src="/x-logo.svg" width="30"/>:<svg width="30" className="color-white fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#000" d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"/>
                    </svg>}
                </button>
            </div>
            <div className="flex flex-1 justify-center items-center">
                <Link className="flex hover:underline text-black items-center mt-0" to="/">
                    <img className="w-20" src="/Borneo-pas.png" alt="Borneo Culture Wiki" />
                    <span className="font-bold text-black text-xl">Culture Wiki</span>
                </Link>
            </div>
            <div className="flex flex-1 items-center justify-end">
                <button className="mx-3 w-30 h-30" onMouseUp={()=>{setHideNav(true);setHideSearch(!hideSearch);}}>
                    {
                        !hideSearch ? <img src="/x-logo.svg" width="30"/> : <img width="30" src="/magnifying-glass.svg" alt="Cari" />
                    }
                </button>
                <button onClick={()=>history.push("/login")} className="bg-black hover:text-gray-300 text-white hover:underline font-bold rounded-lg px-3 py-1">Login</button>
            </div>
        </div>
        <div className={hideSearch?"hide-search":""}>
            <div className="flex justify-end mx-2 rounded-md px-5">
                <input ref={inputElement} onKeyPress={
                    ev => {
                        if (ev.key=="Enter" && ev.target.value.trim().length > 0) history.push("/search/"+ev.target.value)
                    }
                } style={{border:"2px solid black"}} className="mr-1 py-1 rounded-2xl pl-2 w-45" type="text" name="query" id="pencarian" placeholder="Pencarian..."/>
                <button onClick={ev=>{
                    if (inputElement.current.value.trim().length > 0)
                    history.push("/search/"+inputElement.current.value)
                }}><img width="30" src="/magnifying-glass.svg" alt="Cari" /></button>
            </div>
        </div>
        <div className={hideNav?"hide-nav":""}>
            
            {
                navs.map((item, index)=>
                <div key={index} className="hover:bg-black underline mx-2 rounded-md">
                <Link style={{fontSize:13}} onMouseUp={_=>setHideNav(true)} className="px-5 font-xl py-2 text-black hover:text-white"to={item.url}>{item.text}</Link>
                </div>)
            }
        </div>       
    </header>
    );

}