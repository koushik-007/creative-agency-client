import React from 'react';
import caroudel1 from '../../../creative-agency/images/carousel-1.png'
import caroudel2 from '../../../creative-agency/images/carousel-2.png'
import caroudel3 from '../../../creative-agency/images/carousel-3.png'
const ImageSlider = () => {
    return (
        <section style={{backgroundColor: "navy", height: "650px"}}>

            <div className="row py-3 px-2">
                <div className="col-md-4 mx-2">
                    <img src={caroudel1} alt=""/>
                </div>
                <div className="col-md-4 mx-2">
                    <img src={caroudel2} alt=""/>
                </div>
                <div className="col-md-4 mx-2">
                    <img src={caroudel3} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default ImageSlider;