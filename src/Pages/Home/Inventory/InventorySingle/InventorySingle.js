import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './InventorySingle.css'

const InventorySingle = ({ furniture }) => {
    const { name, _id, price, description,quantity, supplier, img, sold } = furniture
    const navigate = useNavigate()
    const navigateToInventory = id => {
        navigate('/inventory/' + id)
    }

    return (
        <div className='single-item text-center'>
            <div>
                <img src={img} alt="" />
                <h5 className='mt-3'>{name}</h5>
                <h5>${price}</h5>
                { quantity < 0 ?
                <h5 className='price'>sold: {sold}</h5>:
                <h5 className='price'>Quantity: {quantity}</h5>
            }
                <h5>Supplier: {supplier}</h5>
                <p>{description}</p>
                <Button className='rounded-0' onClick={() => navigateToInventory(_id)} variant="outline-dark">Update</Button>
            </div>
        </div>
    );
};

export default InventorySingle;