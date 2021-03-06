import { sendEmailVerification } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Registration = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const nameRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    if (loading || updating) {
        return <Loading></Loading>
    }
    let errorMessage;
    if(error || updateError){
        errorMessage = <div className='text-danger text-center'>{error.message}||{updateError.message}</div>
    }
    if (user) {
        console.log(user)
    }
    
    const handleSubmit = async e => {
        e.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        if(sendEmailVerification){
            toast('Registration complete');
            navigate(from, { replace: true })
        }else{
            toast('Your email in not valid')
        }

    }
    return (
        <div className='w-50 mx-auto border p-4 my-5'>
            <div>
                <Form onSubmit={handleSubmit}>
                    <h2 className='text-center my-3'>Please <span className='title-color'>Register</span></h2>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                    </Form.Group>
                   {errorMessage}
                    <Button className='rounded-0 mb-3' type="submit" variant="dark">Registration</Button>
                    <p>Already have an account? <Link className='title-color text-decoration-none' to='/login'>Please Login</Link></p>
                </Form>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Registration;