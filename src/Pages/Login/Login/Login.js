import axios from 'axios';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
      );
      let errorMessage;
    // if (user) {
        
    // }
    if(error){
        errorMessage = <div className='text-danger'>{error.message}</div>
    }
    if(loading){
        return <Loading></Loading>
    }
    const handleSubmit = async e => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        await signInWithEmailAndPassword(email, password)
        const {data} = await axios.post('http://localhost:5000/login',{email})
        localStorage.setItem('accessToken', data)
        navigate(from , {replace:true})
        console.log(data)
        e.target.reset()
    }
    const resetPassword =async ()=>{
        const email = emailRef.current.value
        if(email){
        await sendPasswordResetEmail(email);
        toast('Sent email');
        }else{
            toast('please enter your email')
        }
    }
    return (
        <div className='w-50 mx-auto my-5'>
            <div className='border p-4 my-4'>
                <Form onSubmit={handleSubmit}>
                    <h2 className='text-center my-3'>Please <span className='title-color'>Login</span></h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                        {errorMessage}
                    </Form.Group>
                    <Button className='rounded-0 mb-3' type="submit" variant="dark">Login</Button>
                    <p>New to Furniture-ware-house? <Link className='title-color text-decoration-none' to='/registration'>Create New Account</Link></p>
                    <p>Forget Password?<button className='title-color btn btn-link text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
                </Form>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;