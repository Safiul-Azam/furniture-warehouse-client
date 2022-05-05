import React from 'react';
import './InventoryItem.css'
import InventorySingle from '../InventorySingle/InventorySingle';
import useInventory from '../../../../hooks/useInventory';


const InventoryItem = () => {
    const [products] = useInventory()
    return (
        <div className='my-5'>
            <div className='d-flex align-items-center w-25 mx-auto'>
                <div style={{ height: '2px' }} className='line-color w-25'></div>
                <div>
                    <h3 className='text-center my-4 mx-3'>Inventory <span className='title-color'>Item</span></h3>
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
        </div>
    );
};

export default InventoryItem;