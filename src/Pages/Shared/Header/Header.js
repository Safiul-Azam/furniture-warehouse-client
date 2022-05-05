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
        <div className='container mt-2'>
            <h2 className='logo'>FURNITURE <span className='title-color'>WARE HOUSE</span></h2>
            <div >



            </div>
            <div>
                <Navbar collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className='w-70 d-block mx-auto navbar-menu' >
                                <Link to='/home'>Home</Link>
                                <Link to='/blog'>Blogs</Link>
                                <Link to='/allInventory'>All-Inventory</Link>
                                {
                                    user && <>
                                        <Link to='/addItem'>Add Item</Link>
                                        <Link to='/manage-inventory'>Manage-Inventory</Link>
                                        <Link to='/myItem'>My-item</Link>
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
    );
};

export default Header;