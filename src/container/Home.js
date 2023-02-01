import React from "react"
import Zurag from "../assets/amazing.jpg"
const Home = () =>{
    const data = [
        {
            key:1,
            title:"Гарчиг 1",
            description: "Тайлбар 1" ,
            img: Zurag,
        },
        {
            key:2,
            title:"Гарчиг 2",
            description: "Тайлбар 2",
            img: Zurag,
        },
    ];
    return(
        <div>
         {
            data.map((row)=>(
                <div>
                    <h2>{row.title}</h2>
                    <p>{row.description}</p>
                    <img src={row.img} alt="zuragg"/>
                    
                </div>
            ))
            }
        </div>
    );
};
export default Home