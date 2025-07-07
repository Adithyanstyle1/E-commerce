import React from "react";
import "./Hero.css"
import hero_image from '../Assets/Frontend_Assets/hero_image.png'
import arrow_icon from '../Assets/Frontend_Assets/arrow.png'
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hand-hand-icon">
                       <p>New</p>
                       
                    </div>
                    <p>Collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt=""/>
                </div>

            </div>
              <div className="hero-right">
                <img  src={hero_image} alt=""/>
            </div>
        </div>
       
    )
}

export default Hero