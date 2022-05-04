import React from 'react';
import { useForm } from "react-hook-form";
import './AddItem.css'

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        console.log(data);
        const url = `http://localhost:5000/furniture`
        fetch(url,{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(furniture =>{
            console.log(furniture)
        })
    } 

    return (
        <div className='w-50 mx-auto my-5'>
            <h2 className='text-center my-5'>Add <span className='title-color'>New Item</span></h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 p-2' placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2 p-2' placeholder='Supplier Name' {...register("supplier")} />
                <input className='mb-2 p-2' placeholder='Description' {...register("description")} />
                <input className='mb-2 p-2' placeholder='Price' type="number" {...register("price",)} />
                <input className='mb-2 p-2' placeholder='image url' type="text" {...register("img",)} />
                <input className='mb-2 p-2 submit-btn' value="Add Item" type="submit" />
            </form>
        </div>
    );
};

export default AddItem;