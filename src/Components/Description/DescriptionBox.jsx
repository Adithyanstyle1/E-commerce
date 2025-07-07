import React from "react";
import './DescriptionBox.css';

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box active">
                    Description
                </div>
                <div className="descriptionbox-nav-box fade">
                    Reviews
                </div>
            </div>
            <div className="descriptionbox-description">
  <p>
    Discover the perfect balance of comfort, style, and durability with our latest apparel collection. 
    Designed for men, women, and kids, each product is crafted from premium-quality, breathable fabrics 
    that ensure all-day comfort, whether you're at work, at play, or on the move. Our clothing is tailored 
    to meet the demands of modern lifestyles, offering lightweight wear, easy care, and long-lasting performance 
    without compromising on fashion or fit.
  </p>
</div>

        </div>
    );
};

export default DescriptionBox;
