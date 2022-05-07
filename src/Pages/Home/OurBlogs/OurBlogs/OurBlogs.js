import React, { useEffect, useState } from 'react';
import OurBlog from '../OurBlog/OurBlog';
import './OurBlogs.css'

const OurBlogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='our-blogs'>
            <div className='container '>
                <div  className='text-center'>
                <div className='d-flex align-items-center w-25 mx-auto'>
                <div style={{ height: '2px' }} className='line-color w-25'></div>
                <div>
                    <h3 className='text-center my-4 mx-3'>Our <span className='title-color'>Blogs</span></h3>
                </div>
                <div style={{ height: '2px' }} className='line-color w-25'></div>
            </div>
                    <p className='mb-5'>House-ware-house is considered to be the game-changer in the world furniture industry</p>
                </div>
                <div className='blogs-item'>
                    {
                        blogs.map(blog => <OurBlog 
                        key={blog.id}
                        blog={blog}
                        ></OurBlog>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurBlogs;