import React from 'react';
import banner1 from '../../../images/banner/banner1.png'
import InventoryItem from '../InventoryItem/InventoryItem';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='banner '>
                <div className='w-50'>
                    <h3 className='text-center text-white'>JACOB Dining Hansford-193 and Jellyroll-193 (6 Chair and 1 Table)DINING TABLE</h3>
                </div>
            </div>
            <InventoryItem></InventoryItem>
        </div>
    );
};

export default Home;