import { useEffect, useState } from "react"

const useInventory = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const url = 'https://fast-brook-43843.herokuapp.com/furniture/'
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return [products,setProducts]
}
export default useInventory