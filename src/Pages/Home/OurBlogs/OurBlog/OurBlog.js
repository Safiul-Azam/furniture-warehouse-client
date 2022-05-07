import React from 'react';

const OurBlog = ({ blog }) => {
    const { name, description, img, supplier } = blog
    return (
        <div className='border rounded'>
            <div>
                <img className='w-100' src={img} alt="" />
            </div>
            <div className='p-3 mt-2'>
                <p className='description'>By: {supplier}</p>
                <h4>{name}</h4>
                <p className='description'>{description}</p>
            </div>
        </div>
    );
};

export default OurBlog;