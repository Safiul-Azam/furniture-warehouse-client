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
        const url = `http://localhost:5000/myItems?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyItem(data))
    }, [user])
    const handleRemoveItem = id => {
        const proceed = window.confirm('are you sure')
        if (proceed) {
            const url = `http://localhost:5000/furniture/${id}`
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