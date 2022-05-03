import React from 'react';
import useInventory from '../../../../hooks/useInventory';
import InventorySingle from '../InventorySingle/InventorySingle';

const AllInventory = () => {
    const [products] = useInventory()
    return (
        <div className='my-5'>
            <div>
                <div style={{ height: '1px' }} className='w-25'></div>
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

export default AllInventory;