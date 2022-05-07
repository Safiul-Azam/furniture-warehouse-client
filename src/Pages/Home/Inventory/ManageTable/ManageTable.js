import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ManageTable.css'

const ManageTable = ({ product,handleUpdateItem,handleRemoveItem }) => {
    const { _id, img, name, price, description, supplier } = product
    return (
        <div className='manage-item'>
            <div className='item-img col-lg-4 col-12'>
                <img src={img} alt="" />
            </div>
            <div className='item-info col-lg-6 col-12'>
                <span>{_id}</span>
                <h5>{name}</h5>
                <h5 className='supplier'>Supplier: {supplier}</h5>
                <h5 className='price'>Price: ${price}</h5>
                <p>{description}</p>
            </div>
            <div className='col-lg-2 col-12 '>
                <div className='d-flex text-center align-items-center'>
                    <button className='icon-btn' onClick={() => { handleUpdateItem(_id) }}><FontAwesomeIcon className='update-icon' icon={faPenToSquare}></FontAwesomeIcon></button>
                    <button className='icon-btn' onClick={() => handleRemoveItem(_id)}><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ManageTable;