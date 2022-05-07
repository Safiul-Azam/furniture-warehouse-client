import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const MyAddedProduct = ({furniture, handleRemoveItem}) => {
    const {_id, name, img, supplier, price, description } = furniture
    return (
        <div>
                    <div>
            <div className='manage-item'>
            <div className='item-img col-lg-4 col-12'>
                <img className='w-100' src={img} alt="" />
            </div>
            <div className='item-info col-lg-6 col-12'>
                <span>{_id}</span>
                <h5>{name}</h5>
                <h5 className='supplier'>Supplier: {supplier}</h5>
                <h5 className='price'>Price: ${price}</h5>
                <p>{description}</p>
            </div>
            <div className='col-lg-2 col-12'>
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