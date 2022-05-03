import React from 'react';
import furniture1 from '../../../images/inventory/furniture1.jpg'
import furniture2 from '../../../images/inventory/furniture2.jpg'
import furniture3 from '../../../images/inventory/furniture3.jpg'

const furnitures = [
    { id: 1, name: 'furniture1', price: 120, supplier: 'safiul', quantity: 2, description: 'Nordic Office Dining Chair (White) wooden legs with metal cross frame, height: 82cm, width 46.5cm, depth 53.5cm, pls contact seller for shipping' },
    { id: 2, name: 'furniture1', price: 120, supplier: 'safiul', quantity: 2, description: 'Nordic Office Dining Chair (White) wooden legs with metal cross frame, height: 82cm, width 46.5cm, depth 53.5cm, pls contact seller for shipping' },
    { id: 3, name: 'furniture1', price: 120, supplier: 'safiul', quantity: 2, description: 'Nordic Office Dining Chair (White) wooden legs with metal cross frame, height: 82cm, width 46.5cm, depth 53.5cm, pls contact seller for shipping' },
    { id: 4, name: 'furniture1', price: 120, supplier: 'safiul', quantity: 2, description: 'Nordic Office Dining Chair (White) wooden legs with metal cross frame, height: 82cm, width 46.5cm, depth 53.5cm, pls contact seller for shipping' },
    { id: 5, name: 'furniture1', price: 120, supplier: 'safiul', quantity: 2, description: 'Nordic Office Dining Chair (White) wooden legs with metal cross frame, height: 82cm, width 46.5cm, depth 53.5cm, pls contact seller for shipping' },
    { id: 6, name: 'furniture1', price: 120, supplier: 'safiul', quantity: 2, description: 'Nordic Office Dining Chair (White) wooden legs with metal cross frame, height: 82cm, width 46.5cm, depth 53.5cm, pls contact seller for shipping' }
]

const InventoryItem = () => {
    return (
        <div className='my-5'>
            <div>
                <div></div>
                <h3 className='text-center '>Inventory <span className='title-color'>Item</span></h3>
                <div></div>
            </div>
            <div>
                {
                    furnitures.map(furniture => <div key={furniture.id}>
                        <img src={furniture.img} alt="" />
                        <h3>{furniture.name}</h3>
                    </div>)
                }
            </div>
        </div>
    );
};

export default InventoryItem;