import { useEffect, useState } from "react"

const useInventoryDetails = id =>{
    const [product, setProduct ] = useState({})
    useEffect(()=>{
        const url =`http://localhost:5000/furniture/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[id])
    return [product]
}
export default useInventoryDetails