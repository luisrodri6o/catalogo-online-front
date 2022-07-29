import React, { useState } from "react";
import "./styleSheeds/slider.css";

function Slider({ slides }) {
    const [position, setPosition] = useState(0);
    const amount = slides.length;

    setTimeout(() => {
        setPosition(position === amount - 1 ? 0 : position + 1);
    }, 2000);

    return (
        <section className='slider'>
            {slides.map((slide, index) => {
                return (
                    <div>
                        {index === position && (
                            <div className='slices'>
                                <img src={slide} alt='travel' className='mod' />
                            </div>
                        )}
                    </div>
                );
            })}
        </section>
        // <div className='slider' onClick={next} >
        // 	{slides.map((image, index) => {
        // 		return (
        // 			<div
        // 			 className='slices'>
        // 				{position === index && (
        // 					<div key={'index'} >

        // 					<img

        // 					src={image} alt="imagen"/>
        // 					</div>

        // 					)}
        // 			</div>
        // 		);
        // 	})}
        // </div>
    );
}
export default Slider;
