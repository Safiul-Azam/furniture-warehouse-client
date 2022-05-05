import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height:'300px',color:'#9CC25D'}} className='w-100 d-flex justify-content-center align-items-center'>
            <Spinner animation="grow" />
        </div>
    );
};

export default Loading;