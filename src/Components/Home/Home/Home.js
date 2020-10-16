import React from 'react';
import Contact from '../Contact/Contact';
import FeedBacks from '../FeedBacks/FeedBacks';
import Header from '../Header/Header';
import ImageSlider from '../ImageSlider/ImageSlider';
import Services from '../Seevices/Seevices';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <ImageSlider></ImageSlider>
            <FeedBacks></FeedBacks>
            <Contact></Contact>
        </div>
    );
};

export default Home;