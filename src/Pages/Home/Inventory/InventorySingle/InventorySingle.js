import React from 'react';
import './InventorySingle.css'

const InventorySingle = ({furniture}) => {
    const {name, id, price, description, quantiry, supplier, img} = furniture
    return (
        <div className='single-item text-center'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <h5>${price}</h5>
            <h5>Supplier: {supplier}</h5>
            <p>{description}</p>
            <button className='btn btn-primary'>Update</button>
        </div>
    );
};

export default InventorySingle;