import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const MyAddedProduct = ({furniture, handleRemoveItem}) => {
    const {_id, name, img, supplier, price, description } = furniture
    return (
        <div>
                    <div>
            <div className='manage-item'>
            <div className='item-img col-4'>
                <img src={img} alt="" />
            </div>
            <div className='item-info col-6'>
                <h5>{_id}</h5>
                <h5>{name}</h5>
                <h5 className='supplier'>Supplier: {supplier}</h5>
                <h5 className='price'>Price: ${price}</h5>
                <p>{description}</p>
            </div>
            <div className='col-2'>
                <div className='d-flex align-items-center'>
                    <button className='icon-btn' onClick={() => handleRemoveItem(_id)}><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default MyAddedProduct;