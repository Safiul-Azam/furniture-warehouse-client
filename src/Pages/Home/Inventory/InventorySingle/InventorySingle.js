import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './InventorySingle.css'

const InventorySingle = ({ furniture }) => {
    const { name, _id, price, description,quantity, supplier, img } = furniture
    const navigate = useNavigate()
    const navigateToInventory = id => {
        navigate('/inventory/' + id)
    }

    return (
        <div className='single-item text-center'>
            <div>
                <img src={img} alt="" />
                <h5>{name}</h5>
                <h5>${price}</h5>
                <h5>Quantity: {quantity}</h5>
                <h5>Supplier: {supplier}</h5>
                <p>{description}</p>
                <Button className='rounded-0' onClick={() => navigateToInventory(_id)} variant="outline-dark">Update</Button>
            </div>
        </div>
    );
};

export default InventorySingle;