import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Inventory from '../Inventory/Inventory';
import './InventorySingle.css'

const InventorySingle = ({furniture,handleQuantity}) => {
    const {name, _id, price, description, supplier, img} = furniture
    const navigate = useNavigate()
    const navigateToInventory = id =>{
        navigate('/inventory/'+ id)
    }
    const [quantity, setQuantity] = useState(0)
    const handle = ()=>{
       setQuantity(quantity + 1)
       console.log(quantity + 1)
    }
    return (
        <div className='single-item text-center'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <h5>${price}</h5>
            <h5>Supplier: {supplier}</h5>
            <p>{description}</p>
            <p>{quantity}</p>
            <button onClick={()=>navigateToInventory(_id)} className='btn btn-primary'>Update</button>
        </div>
    );
};

export default InventorySingle;