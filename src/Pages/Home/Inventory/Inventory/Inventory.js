import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useInventoryDetails from '../../../../hooks/useInventoryDetails';
import './Inventory.css'
const Inventory = ({ handleQuantity }) => {
    const { inventoryId } = useParams()
    const [product] = useInventoryDetails(inventoryId)
    return (
        <div className='container product-details my-5'>
            <div className='col-4'>
                <img src={product.img} alt="" />
            </div>
            <div className='single-item col-5'>
                <h5>{product.name}</h5>
                <h5 className='price'>${product.price}</h5>
                <h5>Supplier: {product.supplier}</h5>
                <p className='description'>{product.description}</p>
                <Button className='rounded-0' variant="dark">Delivered</Button>
                <Form.Group className="my-3" controlId="formBasicPassword">
                    <Form.Control type="number" placeholder="Add Quantity" />
                </Form.Group>
                <Button className='rounded-0' variant="outline-dark">add</Button>
            </div>
        </div>
    );
};

export default Inventory;