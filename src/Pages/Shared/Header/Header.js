import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div className='navbar sticky-top'>
            <div className='container'>
                <h2 className='logo'>FURNITURE <span className='title-color'>WARE HOUSE</span></h2>
                <div>
                    <Navbar collapseOnSelect expand="lg">
                        <Container>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className='w-70 d-block mx-auto navbar-menu' >
                                    <Link to='/home'>Home</Link>
                                    <Link to='/Our-blogs'>Our Blogs</Link>
                                    <Link to='/blogs'>Question & Answer</Link>
                                    <Link to='/allInventory'>All-Inventory</Link>
                                    {
                                        user && <>
                                            <Link to='/addItem'>Add Item</Link>
                                            <Link to='/manage-inventory'>Manage-Inventory</Link>
                                            <Link to='/myAddedProducts'>My-item</Link>
                                        </>
                                    }
                                    {user ?
                                        <Link onClick={() => handleSignOut()} to=''>SignOut</Link> :
                                        <Link to='login'>Login</Link>
                                    }
                                </Nav>
                                <Nav>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </div>
    );
};

export default Header;