import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyItem = () => {
    const [myItem, setMyItem] = useState([])
    const [user] = useAuthState(auth)
    useEffect(()=>{
        const email = user.email
        const url = `http://localhost:5000/myItems?email=${email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMyItem(data))
    },[user])
    return (
        <div>
            <h2>my item:${myItem.length}</h2>
        </div>
    );
};

export default MyItem;