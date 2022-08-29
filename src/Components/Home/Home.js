import React from 'react';
import Banner from './Banner'
import Footer from './Footer';
import Section from './Section';
import New from './New';
import Offer from './Offer';
import Slider from './Slider'
import Swip from './Swip'
import Support from './Support'
import Animated from './Animated';
import {countries} from './Data'

const Home = () => {
    return (
        <div>
            <div className="mt-3">
            <Animated  images={countries}/>
            </div>
            <div className='mt-3'>
                <h1 className="text-center text-4xl">Your Dream Product</h1>
            </div> 
            <Swip></Swip>
            <div className='mt-3'>
                <h1 className="text-center text-4xl">Our Service</h1>
            </div>
            <Support></Support> 
            <div className='mt-6'>
                <h1 className="text-center text-4xl">Catagory</h1>
                <Slider></Slider>
            </div>
            <div className='mt-6'>
                <h1 className="text-center text-4xl">Latest Offer</h1>
            </div>  
            <Offer></Offer> 
            <div className="mt-5">
            <h1 className="text-center text-4xl">New Arrivals</h1>
            <New></New>
            </div>
           <div className="mt-6">
           <h1 className="text-center text-4xl">Our Brands Partner</h1>
            <Section></Section>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Home;