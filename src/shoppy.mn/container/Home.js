import React from "react";
import "./Home.css"
import Zurag1 from "../assets/Zurag1.webp"
import Zurag2 from "../assets/Zurag2.webp"
import Zurag3 from "../assets/Zurag3.webp"
import Zurag4 from "../assets/Zurag4.webp"
import Zurag5 from "../assets/Zurag5.webp"
import Zurag6 from "../assets/Zurag6.webp"
import Zurag7 from "../assets/Zurag7.webp"
import zurag8 from "../assets/zurag8.webp"
import Zurag9 from "../assets/Zurag9.webp"
import Zurag10 from "../assets/Zurag10.webp"


const Home = () =>{
    const data = [
        {
            key:1,
            img: Zurag1,
            description: "Хямдрал",
        },
        {
            key:2, 
            img: Zurag2,
            description: "Гэрийн тавилга"
        },
        {
            key:3,
            img: Zurag3,
            description: "Цахилгаан хэрэгсэл",
        },
        {
            key:4, 
            img: Zurag4,
            description: "Тоглоом & Хобби"
        },
        {
            key:5,
            img: Zurag5,
            description: "Арьс арчилгаа",
        },
        {
            key:6, 
            img: Zurag6,
            description: "Технологи"
        },
        {
            key:7,
            img: Zurag7,
            description: "Эрүүл мэнд & эрүүл ахуй",
        },
        {
            key:9,
            img: Zurag9,
            description: "Үнэт эдлэл",
        },
        {
            key:9,
            img: zurag8,
            description: "Спорт",
        },
        {
            key:10, 
            img: Zurag10,
            description: "Тэжээвэр амьтны хангамж"
        },
    ]
    return(
        <div className="home">
            <h2>Онцлох ангилал</h2>
            <div className="home-1">
            {
                data.map((row)=>(
                    <div>
                        <img src={row.img} alt=""/>
                        <p>{row.description}</p>
                    </div>

                ))
            }
            </div>
        </div>
    );
};
export default Home