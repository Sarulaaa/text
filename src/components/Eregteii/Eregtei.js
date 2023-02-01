import React from "react";

import Slider from "react-slick";

const Eregtei = () =>{
  const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };

    return(
        <div>
            <div className="BannerTitle">
              <h2>Улирлын онцлоx Эрэгтэй</h2>
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
export default Eregtei
