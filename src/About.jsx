import React from "react";
import Header from "./Header";
import './styles/about.css'

export default function About(props) {
    return (<>
        <Header history={props.history}>About</Header>
        <img className= "logoabout" src="Borneo.png"/>
        <div className="isi">
        <p>
            Borneo Culture Wiki merupakan projek yang dikerjakan oleh kelompok 3 untuk memenuhi tugas besar mata kuliah Desain Web. Borneo Culture Wiki menjelaskan wilayah Kalimantan yang merupakan sebuah pulau di Indonesia yang belum banyak dijelajahi oleh wisatawan namun memiliki banyak keunikan dan daya tarik termasuk juga kaya dengan warisan budaya. 
            
            Pulau Kalimantan terkenal dengan hutan tropis serta  memiliki sumber daya alam yang terbanyak di Indonesia. Flora dan fauna eksotis juga ditawarkan oleh bumi Kalimantan. Saat ini Kalimantan terbagi menjadi 5 provinsi yaitu Kalimantan Timur, Kalimantan Selatan, Kalimantan Tengah, kalimantan utara dan juga Kalimantan Barat. Masing masing provinsi memiliki ciri khas, rumah adat, tarian adat, baju adat, dan keunikannya sendiri-sendiri.</p>
        </div>

        <div className= "kelompok">
        <h3>Anggota Kelompok 3 :</h3>
        <ul>
            <li>Adhya Adam Sulthan</li>
            <li>Dewi Anjani</li>
            <li>Dilfa Amalia GF</li>
            <li>Fitriani</li>
            <li>Jamaluddin Al-Afgani</li>
            <li>Nirvana dede Aditiya</li>
        </ul>
        </div>
    </>);
}