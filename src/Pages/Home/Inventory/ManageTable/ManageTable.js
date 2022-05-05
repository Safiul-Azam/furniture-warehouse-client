import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventory from '../../../../hooks/useInventory';
import './ManageTable.css'

const ManageTable = ({ product }) => {
    const [products, setProducts] = useInventory()
    const navigate = useNavigate()
    const { _id, img, name, price, description, supplier } = product
    const handleRemoveItem = id => {
        const proceed = window.confirm('are you sure')
        if (proceed) {
            const url = `http://localhost:5000/furniture/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        const remaining = products.filter(product => product._id !==id)
                        setProducts(remaining)
                    }
                })
        }
    }

    const handleUpdateItem = id => {
        navigate('/updateInventory/' + id)
    }
    return (
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
                <button onClick={() => handleRemoveItem(_id)}>X</button>
                <button onClick={() => { handleUpdateItem(_id) }}>Update</button>
            </div>
        </div>
    );
};

export default ManageTable;