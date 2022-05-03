import { useEffect, useState } from "react"

const useInventory = () => {
    const [products, setProduct] = useState([])
    useEffect(()=>{
        const url = 'http://localhost:5000/furniture/'
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return [products]
}
export default useInventory