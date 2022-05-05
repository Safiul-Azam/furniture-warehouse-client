import React, {useRef} from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const handleSubmit = e =>{
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
    }
    return (
        <div className='w-50 mx-auto border p-4 my-5'>
            <Form onSubmit={handleSubmit}>
                <h2 className='text-center my-3'>Please <span className='title-color'>Login</span></h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='title-color'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='title-color'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;