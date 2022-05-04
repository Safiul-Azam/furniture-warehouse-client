import React from 'react';
import useInventory from '../../../../hooks/useInventory';

const ManageInventory = () => {
    const [products] = useInventory()
    const handleRemoveItem = productId =>{
        console.log('removed',productId)
        const url = `http://localhost:5000/furniture/${productId}`
        fetch(url,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    
    return (
        <div className='container'>
            <h3 className='text-center my-4'>Manage <span className='title-color'>Inventory</span></h3>
            <div>
                {
                    products.map(product => <div 
                    key={product._id}
                    >
                        <h2>{product.name} <button onClick={()=>handleRemoveItem(product._id)}>X</button> </h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;