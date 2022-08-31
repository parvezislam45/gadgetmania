import { useEffect, useState } from "react"

const useServiceDetails =orderId =>{
    const [product,setProduct] = useState({})
    useEffect(()=>{
        const url = `https://fierce-wave-53573.herokuapp.com/product/${orderId}`
        console.log(url)
        fetch(url)
        .then(res=> res.json())
        .then (data =>setProduct(data))
    },[orderId])
    
    return [product,setProduct]
}
export default useServiceDetails