import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0" className='w-50 mx-auto my-5 border p-5'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between javascript and nodejs</Accordion.Header>
                    <Accordion.Body>
                        <h3>Javascript</h3>
                        <ul>
                            <li>1.javascript  is a scripting Language.</li>
                            <li>2. Ecma scripts is the old version of javascript.</li>
                            <li>3.javascript only runs in the browser without  node.js.</li>
                            <li>4.it os mostly used in the client side.</li>
                            <li>5.we can added html in javascript.
                                Some javascript libraries react.js, angular eyc</li>
                        </ul>
                        <h3>Node.js</h3>
                        <ul>
                            <li>1.node.js is open source javascript run time engine and it is cross Platform.</li>
                            <li>2.we can used it for server side and web development.</li>
                            <li>3.node.js doesn’t capable to add html.</li>
                            <li>4.some node.js libraries like,express,cors,lodash etc</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> Differences between sql and nosql databases.</Accordion.Header>
                    <Accordion.Body>
                        <h3>Sql</h3>
                        <ul>
                            <li>1. It's database is static.</li>
                            <li>2. it is used by complex queries</li>
                            <li>3. it is vertically scalable.</li>
                        </ul>
                        <h3>NoSql</h3>
                        <ul>
                            <li>1. it is Flexible to use.</li>
                            <li>2. it is like json.</li>
                            <li>3. it is horizontal scalable.</li>
                            <li>4. it's database dynamic structure.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is the purpose of jwt and how does it work</Accordion.Header>
                    <Accordion.Body>
                        <h5>Full meaning of jwt json web token</h5>
                        <ul>
                            <li>1.jwt send securely transmits information from client side to server side.</li>
                            <li>2.it ensure us to not access without authorized.</li>
                            <li>3.create a token from server and come to client. While came token in server it is store in localstorage or browser cookies.</li>
                            <li>4.then when send request to backend by bearer. And then if the token is veiled give information to user.</li>
                        </ul>
                        <h5>Three part for a token.</h5>
                        <ul>
                            <li>1.header.</li>
                            <li>2.payload.</li>
                            <li>3.signature</li>
                        </ul>
                        
                        
                       
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;