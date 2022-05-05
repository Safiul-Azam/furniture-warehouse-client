import React from 'react';
import InventoryItem from '../Inventory/InventoryItem/InventoryItem';
import Sliders from '../Sliders/Sliders';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='banner'>
                <div className='w-50 container'>
                    <h3 className='text-center banner-title'>JACOB Dining Hansford-193 and Jellyroll-193 (6 Chair and 1 Table)DINING TABLE</h3>
                    <button className='update-btn d-block mx-auto'>Update</button>
                </div>
            </div>
            <InventoryItem></InventoryItem>
        </div>
    );
};

export default Home;