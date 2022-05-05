import React from 'react';
import google from '../../../images/social-icon/google.png';
import github from '../../../images/social-icon/github.png';
import './SocialLogin.css'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='line-color w-50'></div>
                <div className='mx-3'>or</div>
                <div style={{ height: '1px' }} className='line-color w-50'></div>
            </div>
            <div>
                <button className='btn social-btn w-50 mx-auto d-block my-3'>
                    <img className='me-2' src={google} alt="" />
                     Google Sign In
                    </button>
                <button className='btn btn-dark social-btn w-50 mx-auto d-block my-3'>
                    <img className='me-2' src={github} alt="" />
                     GitHub Sign In
                    </button>
            </div>
        </div>
    );
};

export default SocialLogin;