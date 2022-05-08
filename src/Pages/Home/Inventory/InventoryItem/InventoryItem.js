import React from 'react';
import InventorySingle from '../InventorySingle/InventorySingle';
import useInventory from '../../../../hooks/useInventory';
import './InventoryItem.css'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const InventoryItem = () => {
    const [products] = useInventory()
    const navigate = useNavigate()
    return (
        <div className='my-5'>
            <div className='d-flex align-items-center w-25 mx-auto'>
                <div style={{ height: '2px' }} className='line-color w-25'></div>
                <div>
                    <h3 className='text-center my-4'>Item <span className='title-color'>Inventory</span></h3>
                </div>
                <div style={{ height: '2px' }} className='line-color w-25'></div>
            </div>
            <div className='container furniture-collection'>
                {
                    products.slice(0, 6).map(furniture => <InventorySingle
                        key={furniture._id}
                        furniture={furniture}
                    ></InventorySingle>)
                }
            </div>
                <div className='text-center my-4 '>
                    <Button onClick={() => navigate('/allInventory')} className='rounded-0 my-3 px-5' variant="dark">All Inventory</Button>
                </div>
        </div>
    );
};

export default InventoryItem;