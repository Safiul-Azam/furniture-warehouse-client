import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import MyAddedProduct from '../MyAddedProduct/MyAddedProduct';

const MyItem = () => {
    const [myItem, setMyItem] = useState([])
    console.log(myItem)
    const [user] = useAuthState(auth)
    useEffect(() => {
        const email = user.email
        const url = `https://fast-brook-43843.herokuapp.com/myItems?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyItem(data))
    }, [user])
    const handleRemoveItem = id => {
        const proceed = window.confirm('are you sure')
        if (proceed) {
            const url = `https://fast-brook-43843.herokuapp.com/furniture/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = myItem.filter(product => product._id !== id)
                        setMyItem(remaining)
                    }
                })
        }
    }
    return (
        <div>
            <div className='d-flex align-items-center w-25 mx-auto'>
                <div style={{ height: '2px' }} className='line-color w-25'></div>
                <div>
                    <h3 className='text-center my-4'>My <span className='title-color'>Item</span></h3>
                </div>
                <div style={{ height: '2px' }} className='line-color w-25'></div>
            </div>
          {
              myItem.map(furniture => <MyAddedProduct
                 key={furniture._id}
                 furniture={furniture}
                 handleRemoveItem={handleRemoveItem}
                 ></MyAddedProduct>)
          }
        </div>
    );
};

export default MyItem;