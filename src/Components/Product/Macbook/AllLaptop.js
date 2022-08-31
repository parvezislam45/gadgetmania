import React from "react";
import {Link} from 'react-router-dom'
import Details from "./Details";
import { useParams } from "react-router-dom";
import useProduct from "../../../Hook/Hook";

const AllLaptop = () => {
  const [products, setProducts] =useProduct()
  const { orderId} = useParams()
  const handleDelate = id =>{
    const proceed = window.confirm('Are You Sure Delate This ???')
    if(proceed){
        const url = `http://localhost:7000/product/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining = products.filter(product => product._id !== id);
            setProducts(remaining);

        })
    }
}
  return (
    <div>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 gap-y-15">
        {products.map((product) => (<Details 
        key={product._id} 
        product={product}
        handleDelate={handleDelate} 
        >
          {/* setBuy={setBuy} */}
        </Details>
        ))}
      </div>
      <div className="text-center mt-5">
                    <Link to='/additem'>
                    <button class="btn glass">Add Item</button>
                    </Link>
                </div>
      {/* {buy && <Modal buy={buy}></Modal>} */}

    </div>
  );
};

export default AllLaptop;
