import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseServiceDetails from '../../Hook/UseServiceDetails'
const Update = () => {
    const { id } = useParams();
    const [product, setProduct] = UseServiceDetails(id)
    const [isReload, setIsreload] = useState(false)
    useEffect(() => {
        const url = `https://fierce-wave-53573.herokuapp.com/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [isReload])
    const handleAdd = e => {
        e.preventDefault()
        const quantity = e.target.quantity.value
        const newQuantity = parseInt(quantity) + parseInt(product?.quantity)
        console.log(newQuantity)
        const updateItem = { newQuantity }
        if (!quantity) {
            // toast('Quantity Added SuccessFully')
        }
        else {
            const url = `http://localhost:7000/user/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateItem)
            })
                .then(res => res.json())
                .then(result => {
                    setIsreload(!isReload)
                    e.target.reset()
                    // setItems(result);
                })
        }

    };

    const delivery = e => {
        const quantity = product?.quantity
        const updateItem = { quantity }
        const url = `http://localhost:7000/delivery/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setIsreload(!isReload)
                // setItems(result);
            })


    };
    return (
        <div className='bg-black'>
            <h1 className='text-white text-center name text-2xl'>Update Quantity {product.name}</h1>
            <div class="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
                <img src={product.img} alt=""class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center" />
                <div class="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                    <div class="py-2 text-center font-bold uppercase tracking-wide text-gray-800">{product.name}</div>
                    <div class="flex items-center justify-between py-2 px-3 bg-gray-400">
                        <h1 class="text-gray-800 font-bold "> Quantity : {product.quantity}</h1>
                        <button onClick={()=>delivery(product._id)} class=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">Delivered</button>
                    </div>
                    <div class="flex items-center justify-between py-2 px-5 bg-gray-400">
                    <form onSubmit={handleAdd}>
                    <input className="input input-bordered input-primary w-28 h-8 max-w-xs gap-4" type="text"placeholder=''name ='quantity'/>
                    <input class="mt-4 text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900" className='bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700 gap-4' type="submit" value="update" />
                </form>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Update;