import { useEffect, useState } from "react"

const useProduct =()=>{
    const [products,setProducts] =useState([])
    useEffect(()=>{
        const url = `https://fierce-wave-53573.herokuapp.com/product`
        fetch(url)
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[])
    return [products,setProducts]
}
export default useProduct;