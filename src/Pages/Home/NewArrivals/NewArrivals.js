import React, { useEffect, useState } from 'react';
import './NewArrivals.css'

const NewArrivals = () => {
    const [arrivals , setArrivals] = useState([])
    useEffect(()=>{
        fetch('arivals.json')
        .then(res => res.json())
        .then(data => setArrivals(data))
    },[])
    return (
        <div>
           {
               arrivals.map(arrival => <div
                 key={arrival.id}
                 >
                    <div className='container d-flex justify-content-between align-items-center'>
                       
                      <div className='arrival-info col-5'>
                          <h5>New Arrivals</h5>
                          <h2>{arrival.name}</h2>
                          <h2 className='limited'>Limited Product</h2>
                          <h4> ${arrival.price}</h4>
                          <p>{arrival.description}</p>
                          <button variant="outline-dark" className='update-arrival-btn'>Update</button>
                      </div>
                      <div className='col-6'> 
                          <img src={arrival.img} alt="" />
                      </div>  
                    </div> 
                 </div> )
           }
        </div>
    );
};

export default NewArrivals;