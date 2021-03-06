import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import './HomePageSlider.scss'
import { Link } from 'react-router-dom';

const Home2 = ({ slides }) => {
const [current, setCurrent] = useState(0)
const length = slides.length

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
}

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
}

if(!Array.isArray(slides) || slides.length <= 0){
    return null;
}

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
           {SliderData.map ((slide, index) =>{

               return(
                   <div className={index === current ? 'slide active' : 'slide'} key={index}>
                       {index === current && (
                        <Link to ={slide.path} style={{ textDecoration: 'none' }}>
                            
                            <img src={slide.image} alt="home-page-covers" className="slider__image"/>
                            <h2 className="slider__heading">{slide.heading}</h2>
                        </Link>
                       )}
                    
                   </div>
                   
               )
           })}
        </section>
    )
};

export default Home2;
