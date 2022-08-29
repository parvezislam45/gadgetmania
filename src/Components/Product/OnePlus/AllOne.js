import React, { useEffect, useState } from 'react';
import OneDetails from './OneDetails';

const AllOne = () => {
    const[phones,setPhone]=useState([])
    useEffect(()=>{
        fetch('oneplus.json')
        .then(res => res.json())
        .then(data => setPhone(data))
    },[])
    return (
        <div  className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 gap-y-15'>
            {
                phones.map(phone =><OneDetails
                key={phone._id}
                phone={phone}
                ></OneDetails>)
            }
        </div>
    );
};

export default AllOne;