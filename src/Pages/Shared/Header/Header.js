import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = ()=>{
        signOut(auth)
    }
    return (
        <div className='container mt-5'>
            <h2 className='logo'>FURNITURE <span className='title-color'>WARE HOUSE</span></h2>
            <div className='text-center navbar-menu'>
                <Link to='/home'>Home</Link>
                <Link to='/blog'>Blogs</Link>
                <Link to='/allInventory'>All-Inventory</Link>
                {
                    user && <>
                <Link to='/addItem'>Add Item</Link>
                <Link to='/manage-inventory'>Manage-Inventory</Link>
                    </>
                }
                { user?
                    <Link onClick={()=>handleSignOut()} to=''>SignOut</Link>:
                    <Link to='login'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;