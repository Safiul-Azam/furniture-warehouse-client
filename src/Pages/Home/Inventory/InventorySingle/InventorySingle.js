import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './InventorySingle.css'

const InventorySingle = ({ furniture }) => {
    const { name, _id, price, description, supplier, img } = furniture
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
                <h5>Supplier: {supplier}</h5>
                <p>{description}</p>
                <button onClick={() => navigateToInventory(_id)} className='btn btn-primary'>Update</button>
            </div>
            <Link to='/manage-inventory'>manage inventory</Link>
        </div>
    );
};

export default InventorySingle;