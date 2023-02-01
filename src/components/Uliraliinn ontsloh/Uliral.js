import React from "react";
import "./Uliral.css"
import Slider from "react-slick";
const Uliral = () =>{
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return(
        <div className="Body">
            <div className="BannerTitle">
              <h2>Улирлын онцлоx</h2>
            </div>
        <Slider {...settings}>
         <div className="Banner">
            <img src="https://cdn.cody.mn/img/150349/600x0xwebp/ulirliin_ontslokh_angilal-owliin_sport.jpg?h=b1ecf70b2f5efef268b61dbfbc33585efad2661a" alt=""/>
            <div className="BannerText">
                <p>Өвлийн спорт</p>
            </div>

         </div>
         <div className="Banner">
            <img src="https://cdn.cody.mn/img/150350/600x0xwebp/ulirliin_ontslokh_angilal-gaduur_huwtsas.jpg?h=b1ecf70b2f5efef268b61dbfbc33585efad2661a" alt=""/>

         </div>
         <div className="Banner">
            <img src="https://cdn.cody.mn/img/150351/600x0xwebp/owoldoo_beldey_angilal-owliin_gutal.jpg?h=b1ecf70b2f5efef268b61dbfbc33585efad2661a" alt=""/>

         </div>
          <div className="Banner">
            <img src="https://cdn.cody.mn/img/150354/600x0xwebp/owoldoo_beldey_angilal-malgai_oroolt.jpg?h=b1ecf70b2f5efef268b61dbfbc33585efad2661a" alt=""/>

         </div>
         <div className="Banner">
            <img src="https://cdn.cody.mn/img/150866/600x0xwebp/huuhdiin_dulaan_tsamts.jpg?h=b1ecf70b2f5efef268b61dbfbc33585efad2661a" alt=""/>

         </div>
         <div className="Banner">
            <img src="https://cdn.cody.mn/img/150355/600x0xwebp/ulirliin_ontslokh_angilal-vitamin.jpg?h=b1ecf70b2f5efef268b61dbfbc33585efad2661a" alt=""/>

         </div>
         <div className="Banner">
            <img src="https://cdn.cody.mn/img/150352/600x0xwebp/owoldoo_beldey_angilal-agaar_tsewershuulegch.jpg?h=b1ecf70b2f5efef268b61dbfbc33585efad2661a" alt=""/>

         </div>

        </Slider>

        </div>
    );
};
export default Uliral
