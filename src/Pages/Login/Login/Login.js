import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        navigate('/home')
    }
    const handleSubmit = e => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
        console.log(email, password)
    }
    return (
        <div className='w-50 mx-auto my-5'>
            <div className='border p-4 my-4'>
                <Form onSubmit={handleSubmit}>
                    <h2 className='text-center my-3'>Please <span className='title-color'>Login</span></h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='title-color'>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='title-color'>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <p>New to Furniture ware house? <Link to='/registration'>Create New Account</Link></p>
                </Form>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;