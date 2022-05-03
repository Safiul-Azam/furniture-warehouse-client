import React from 'react';
import './InventoryItem.css'
import furniture1 from '../../../images/inventory/furniture1.jpg'
import furniture2 from '../../../images/inventory/furniture2.jpg'
import furniture3 from '../../../images/inventory/furniture3.jpg'
import InventorySingle from '../Home/InventorySingle/InventorySingle';

const furnitures = [
    { id: 1, name: 'furniture1', price: 120, img:furniture1, supplier: 'safiul', quantity: 2, description: 'Nordic Office Dining Chair (White) wooden legs with metal cross frame, height: 82cm, width 46.5cm, depth 53.5cm, pls contact seller for shipping' },
    { id: 2, name: 'furniture2', price: 120, img:furniture2, supplier: 'safiul', quantity: 2, description: 'Nordic Office Dining Chair (White) wooden legs with metal cross frame, height: 82cm, width 46.5cm, depth 53.5cm, pls contact seller for shipping' },
    { id: 3, name: 'furniture3', price: 120, img:furniture3, supplier: 'safiul', quantity: 2, description: 'Nordic Office Dining Chair (White) wooden legs with metal cross frame, height: 82cm, width 46.5cm, depth 53.5cm, pls contact seller for shipping' },
    { id: 4, name: 'furniture4', price: 120, img:furniture1, supplier: 'safiul', quantity: 2, description: 'Nordic Office Dining Chair (White) wooden legs with metal cross frame, height: 82cm, width 46.5cm, depth 53.5cm, pls contact seller for shipping' },
    { id: 5, name: 'furniture5', price: 120, img:furniture2, supplier: 'safiul', quantity: 2, description: 'Nordic Office Dining Chair (White) wooden legs with metal cross frame, height: 82cm, width 46.5cm, depth 53.5cm, pls contact seller for shipping' },
    { id: 6, name: 'furniture6', price: 120, img:furniture3, supplier: 'safiul', quantity: 2, description: 'Nordic Office Dining Chair (White) wooden legs with metal cross frame, height: 82cm, width 46.5cm, depth 53.5cm, pls contact seller for shipping' }
]

const InventoryItem = () => {
    return (
        <div className='my-5'>
            <div>
                <div></div>
                <h3 className='text-center '>Inventory <span className='title-color'>Item</span></h3>
                <div></div>
            </div>
            <div className='container furniture-collection'>
                {
                    furnitures.map(furniture => <InventorySingle
                    key={furniture.id}
                    furniture={furniture}
                    ></InventorySingle>)
                }
            </div>
        </div>
    );
};

export default InventoryItem;