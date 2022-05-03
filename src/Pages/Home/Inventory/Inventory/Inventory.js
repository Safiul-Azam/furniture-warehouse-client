import React from 'react';
import { useParams } from 'react-router-dom';
import useInventoryDetails from '../../../../hooks/useInventoryDetails';
const Inventory = () => {
    const {inventoryId} = useParams()
    const [product] = useInventoryDetails(inventoryId)
    
    const handleCount = ()=>{
        console.log('count')
    }
    return (
        <div className='container d-flex justify-content-center'>
            <div>
                <img src={product.img} alt="" />
            </div>
            <div>
            <div className='single-item text-center'>
            <h5>{product.name}</h5>
            <h5>${product.price}</h5>
            <h5>Supplier: {product.supplier}</h5>
            <p>{product.description}</p>
            <button onClick={handleCount} className='btn btn-primary'>Delivered</button>
        </div>
            </div>
        </div>
    );
};

export default Inventory;