import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='text-center'>
                    <p className='newsletter'>Newsletter</p>
                    <h3 className='subscribe'>Subscribe to our newsletter</h3>
                    <p className='w-50 mx-auto mb-5'>Join our subscribers list to get the latest news, updates and special offers delivered directly in your inbox</p>
                    <InputGroup className="mb-3 w-50 mx-auto">
                        <FormControl
                        className='rounded-0 p-2'
                            placeholder="Enter Your Email"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button className='rounded-0 p-2 sub-btn' id="button-addon2">
                            Subscribe
                        </Button>
                    </InputGroup>
                </div>
                <div className='mt-5'>
                    <p className='text-center'>&copy; Copyright <span className='title-color'>Furniture-ware-house</span>. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;