import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="navbar sticky-top bg-white shadow-lg">
      <div className="container d-flex align-items-center justify-content-between">
        <h2 className="fs-6">
          FURNITURE <span className="title-color">WARE HOUSE</span>
        </h2>
        <Navbar collapseOnSelect expand="sm">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-block mx-auto navbar-menu fs-5">
              <Link to="/home">Home</Link>
              <Link to="/Our-blogs">Our Blogs</Link>
              <Link to="/blogs">Question & Answer</Link>
              <Link to="/allInventory">All-Inventory</Link>
              {user && (
                <>
                  <Link to="/addItem">Add Item</Link>
                  <Link to="/manage-inventory">Manage-Inventory</Link>
                  <Link to="/myAddedProducts">My-item</Link>
                </>
              )}
              {user ? (
                <Link onClick={() => handleSignOut()} to="">
                  SignOut
                </Link>
              ) : (
                <Link to="login">Login</Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
