import React, { useEffect, useState } from 'react';
import IphoneDetails from './IphoneDetails';

const AllIphone = () => {
    const [products,setProduct]=useState([])
    useEffect(()=>{
        fetch('iphone.json')
        .then(res => res.json())
        .then(data =>setProduct(data))
    },[])
    return (
        <div  className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 gap-y-15'>
            {
                products.map(product =><IphoneDetails
                key={product._id}
                product={product}
                ></IphoneDetails>)
            }
        </div>
    );
};

export default AllIphone;