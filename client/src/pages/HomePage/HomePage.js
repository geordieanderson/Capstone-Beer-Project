import React from 'react';
import HomePageSlider from '../../components/HomePageSlider/HomePageSlider';
import { SliderData } from '../../components/HomePageSlider/SliderData';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
    return (
        <>
        <Header />
        <HomePageSlider slides={SliderData}/>
        <Footer />
        </>
    );
};

export default HomePage;