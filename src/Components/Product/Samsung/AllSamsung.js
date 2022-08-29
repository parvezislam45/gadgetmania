import React, { useEffect, useState } from 'react';
import SamsungDetails from './SamsungDetails';

const AllSamsung = () => {
    const[samsungs,setSamsung]= useState([])
   useEffect(()=>{
    fetch('samsung.json')
    .then(res => res.json())
    .then(data => setSamsung(data))
   },[])
    return (
        <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 gap-y-15'>
           {
            samsungs.map(samsung =><SamsungDetails
            key={samsung._id}
            samsung={samsung}
            ></SamsungDetails>)
           } 
        </div>
    );
};

export default AllSamsung;