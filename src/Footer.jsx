import React from "react";
import { Link } from "react-router-dom";
import './styles/footer.css';

export default function Footer({style}) {
    const navs = [
        {text:"About",url:"/about"},
        {text:"Kalimatan Timur",url:"/provinsi/kalimantan-timur"},
        {text:"Kalimatan Tengah",url:"/provinsi/kalimantan-tengah"},
        {text:"Kalimatan Utara",url:"/provinsi/kalimantan-utara"},
        {text:"Kalimatan Selatan",url:"/provinsi/kalimantan-selatan"},
        {text:"Kalimatan Barat",url:"/provinsi/kalimantan-barat"},
        {text:"Login", url:"/login"}
    ];

    return (
        <footer style={typeof style == "object" ?style:{}} className="flex flex-col sm:flex-row px-8 py-10 justify-around items-center bg-gray-800">
        <div className="flex-1">
            <h1 className="text-white font-bold">Borneo Culture Wiki</h1>
            <span className="text-justify text-sm text-gray-400">
            Borneo Culture Wiki menjelaskan wilayah Kalimantan yang merupakan sebuah pulau di Indonesia yang belum banyak dijelajahi oleh wisatawan namun memiliki banyak keunikan dan daya tarik termasuk juga kaya dengan warisan budaya.
            </span>
        </div>
        <div className="flex justify-center flex-1 sm:pl-8">
            <ul className="text-center sm:text-left mt-3 sm:mt-0">
                {
                    [...navs].map((item,index)=>
                    <li key={index}>
                        <Link to={item.url} className="mt-0 text-white hover:text-gray-400 text-sm pt-2 underline">{item.text}</Link>
                    </li>)
                }
            </ul>
        </div>
        </footer>
    );
}