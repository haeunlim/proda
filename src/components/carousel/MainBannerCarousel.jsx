import React, {Component} from "react";
import Slider from "react-slick";
import "@node/slick-carousel/slick/slick.css"
import "@node/slick-carousel/slick/slick-theme.css";

import banner from "@img/main/main_banner.jpg";
import bannerMo from "@img/main/mobile_banner.png";

export default class MainSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };
        return (
            <div className="bot_banner">
                
                
                <Slider {...settings}>
                    <div>
                        <img src={banner} alt="" className="only_web"/>
                        <img src={bannerMo} alt="" className="only_mo"/>
                    </div>
                    <div>
                        <img src={banner} alt="" className="only_web"/>
                        <img src={bannerMo} alt="" className="only_mo"/>
                    </div>
                    <div>
                        <img src={banner} alt="" className="only_web"/>
                        <img src={bannerMo} alt="" className="only_mo"/>
                    </div>
                    <div>
                        <img src={banner} alt="" className="only_web"/>
                        <img src={bannerMo} alt="" className="only_mo"/>
                    </div>
                </Slider>
            </div>
        );
    }
}