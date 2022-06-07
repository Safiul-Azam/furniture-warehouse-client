import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import MyAddedProduct from '../MyAddedProduct/MyAddedProduct';

const MyItem = () => {
    const [myItem, setMyItem] = useState([])
    const navigate = useNavigate()
    console.log(myItem)
    const [user] = useAuthState(auth)
    useEffect(() => {
        const getMyItem = async () => {
            const email = user?.email
            const url = `https://fast-brook-43843.herokuapp.com/myItems?email=${email}`
            console.log(url)
            try {
                
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setMyItem(data)
                console.log(data)
            } catch (error) {
                toast(error.message)
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getMyItem()
    }, [navigate, user.email])
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
                    <h3 className='text-center my-4 mx-3'>My <span className='title-color'>Item</span></h3>
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