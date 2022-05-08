import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInventoryDetails from '../../../../hooks/useInventoryDetails';
import './Inventory.css'
const Inventory = () => {
    const { inventoryId } = useParams()
    const [product, setProduct] = useInventoryDetails(inventoryId)
    const { quantity } = product
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const addedQuantity = parseFloat(data?.quantity)
        const currentQuantity = JSON.parse(quantity)
        const newQuantity = currentQuantity + addedQuantity
        
        const url = `https://fast-brook-43843.herokuapp.com/furniture/${inventoryId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ quantity: newQuantity })
        })
            .then(res => res.json())
            .then(quantity => {
                setProduct({quantity:newQuantity})
                // toast('Update Your product')

            })
    }
    const handleIncrease = () => {
        const currentQuantity = JSON.parse(quantity) - 1
        const url = `https://fast-brook-43843.herokuapp.com/furniture/${inventoryId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({quantity: currentQuantity})
        })
            .then(res => res.json())
            .then(quantity => {
                setProduct({quantity:currentQuantity})
                // toast('Update Your product')

            })


    }

    return (
        <div className='container product-details my-5'>
            <div className='col-4'>
                <img src={product?.img} alt="" />
            </div>
            <div className='single-item col-5'>
                <h5>{product.name}</h5>
                <h5 className='price'>${product?.price}</h5>
                <h5 className='price'>Quantity: {product?.quantity}</h5>
                <h5>Supplier: {product?.supplier}</h5>
                <p className='description'>{product?.description}</p>
                <Button onClick={handleIncrease} className='rounded-0 my-3' variant="dark">Delivered</Button>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='me-2' placeholder='Product Quantity' type="number" {...register("quantity")} />
                    <input type="submit" value='Add' />
                </form>
            </div>
        </div>
    );
};
export default Inventory;