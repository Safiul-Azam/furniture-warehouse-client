import React from 'react';
import useInventory from '../../../../hooks/useInventory';
import ManageTable from '../ManageTable/ManageTable';

const ManageInventory = () => {
    const [products] = useInventory()
    return (
        <div className='container'>
            <h3 className='text-center my-4'>Manage <span className='title-color'>Inventory</span></h3>
            <div>
                {
                    products.map(product => <ManageTable
                        key={product._id}
                        product={product}
                    ></ManageTable>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;