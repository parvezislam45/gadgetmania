import React from 'react';
import Section from './Section';
import New from './New';
import Offer from './Offer';
import Slider from './Slider'
import Swip from './Swip'
import Support from './Support'
import Animated from './Animated';
import Banner from './Banner';
import { countries } from './Data'
import Product from './Product';

const Home = () => {
    return (
        <div>
            <div className="mt-3">
                <Banner></Banner>
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
                <Product></Product>
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
        </div>
    );
};

export default Home;