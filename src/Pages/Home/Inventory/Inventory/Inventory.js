import React, { useEffect, useState }  from 'react';
import { Button} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInventoryDetails from '../../../../hooks/useInventoryDetails';
import './Inventory.css'
const Inventory = () => {
    const [reload, setIsReload] =useState(true) 
    const { inventoryId } = useParams()
    const [product] = useInventoryDetails(inventoryId)
    useEffect(()=>{
        const url =`http://localhost:5000/furniture/${inventoryId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setIsReload(!reload))
    },[])
    const handleDeleteQuantity = () => {
        const newQuantity = product.quantity - 1
        const url = `http://localhost:5000/furniture/${inventoryId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(data=>{
                console.log(data)
            })
    }
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/furniture/${inventoryId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(quantity => {
                if (quantity.modifiedCount > 0) {
                    toast('Update Your product')
                    console.log(quantity)
                } else {
                    toast('please update product info!')
                }
            })
    }

    return (
        <div className='container product-details my-5'>
            <div className='col-4'>
                <img src={product.img} alt="" />
            </div>
            <div className='single-item col-5'>
                <h5>{product.name}</h5>
                <h5 className='price'>${product?.price}</h5>
                <h5 className='price'>Quantity: {product.quantity}</h5>
                <h5>Supplier: {product?.supplier}</h5>
                <p className='description'>{product?.description}</p>
                <Button onClick={handleDeleteQuantity} className='rounded-0 my-3' variant="dark">Delivered</Button>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='me-2' placeholder='Product Quantity' type="number" {...register("quantity")} />
                    <input type="submit" value='Add' />
                </form>
                {/* <Form.Group className="my-3" controlId="formBasicPassword">
                        <Form.Control ref={numberRef} type="number" placeholder="Add Quantity" />
                    </Form.Group>
                <Button onClick={handleAddQuantity} className='rounded-0' variant="outline-dark">add</Button> */}
            </div>
        </div>
    );
};
export default Inventory;