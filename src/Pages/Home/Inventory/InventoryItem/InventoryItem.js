import React from 'react';
import './InventoryItem.css'
import InventorySingle from '../InventorySingle/InventorySingle';
import useInventory from '../../../../hooks/useInventory';



const InventoryItem = () => {
    const [products] = useInventory()
    return (
        <div className='my-5'>
            <div>
                <div></div>
                <h3 className='text-center '>Inventory <span className='title-color'>Item</span></h3>
                <div></div>
            </div>
            <div className='container furniture-collection'>
                {
                    products.map(furniture => <InventorySingle
                    key={furniture._id}
                    furniture={furniture}
                    ></InventorySingle>)
                }
            </div>
        </div>
    );
};

export default InventoryItem;