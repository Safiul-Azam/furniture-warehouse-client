import React from 'react';
import noFound from '../../../src/images/noFound/404.png'

const NoFoundPage = () => {
    return (
        <div className='container text-center mx-auto'>
            <div>
                <img src={noFound} alt="" />
            </div>
            <h2> page not found</h2>
            <h1>404</h1>
        </div>
    );
};

export default NoFoundPage;