import React, {useState, useEffect} from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import "./styles/index.css";
import {useSelector} from 'react-redux';
import Footer from "./Footer";
import {Slide} from 'react-slideshow-image';
import './styles/slideshow.css';

function Slideshow() {
    const data = useSelector(selector=>selector);
    const urls = [
        "https://cdn-cms.pgimgs.com/static/2019/10/9-Ciri-Khas-Rumah-Adat-Kalimantan-Timur.png",
        "https://guratgarut.com/wp-content/uploads/2020/02/Tari-Gantar-Kalimantan-Timur-1200x900-1.jpg",
        "https://i0.wp.com/tambahpinter.com/wp-content/uploads/2020/09/Bagajah-Gamuling-Baulur-Lulut.jpg"
    ]
    return ( <div>
        <Slide easing="ease">
          {
              urls.map((item, index) => 
              <div key={index} className="each-slide">
              <div className="bg-center" style={{'backgroundImage': `url(${item})`}}>
              </div>
            </div>)
          }
        </Slide>
      </div>);
}

export default ({history}) => {
    const data = useSelector(selector=>selector);
    const dataKeys = [...Object.keys(data)]
    useEffect(()=>{
        document.title = "Borneo Culture Wiki";
    },[]);
    return (<div className="flex flex-col">
        <Header history={history}>Borneo Culture Wiki</Header>
        <div className="flex-grow mt-5">
            <div className="banner flex flex-col">
                <Slideshow/>
            </div>
            <div className="mt-4 conten" style={{textAlign: 'center'}}>
                <h1 style={{letterSpacing:"2px"}} className="text-4xl font-bold mb-5">Kalimantan</h1>
                
                <div className="grid grid-cols-3 mx-10 gap-3">
                    {
                        dataKeys.map((val, i)=>(
                            <Link  key={i} to={"/provinsi/" + val}>
                                <div className="text-black rounded-xl flex justify-center items-center" key={i}>
                                <div className="hover:bg-gray-800 p-3 rounded hover:text-white flex flex-col justify-center items-center">
                                <img src={data[val].logo} className="w-20" />
                                <span className="text-lg">{data[val].title}</span>
                                </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                {/* <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                        {data.map(val=>(
                            <li key={val.url}>
                                <Link to={`/provinsi/${val.url}`}>{val.nama}</Link>
                            </li>
                        ))}
                </ul> */}
            </div>
        </div>
        <Footer/>
    </div>);
}

