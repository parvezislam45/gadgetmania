import { useEffect, useState } from "react"

const useOrder = email =>{
    const [orders,setOrders] =useState({})
    useEffect(()=>{
        const url =`https://fierce-wave-53573.herokuapp.com/order`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return [orders,setOrders]
}
export default useOrder