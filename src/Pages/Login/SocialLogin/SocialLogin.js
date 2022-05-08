import React from 'react';
import google from '../../../images/social-icon/google.png';
import github from '../../../images/social-icon/github.png';
import './SocialLogin.css'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const SocialLogin = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    if(googleUser || gitUser){
        navigate(from, {replace:true})
    }
    let errorMessage;
    if(googleError || gitError){
        errorMessage = <div className='text-danger text-center'>{gitError.message}</div>
    }


    if(googleLoading || gitLoading){
        return <Loading></Loading>
    }
   
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='line-color w-50'></div>
                <div className='mx-3'>or</div>
                <div style={{ height: '1px' }} className='line-color w-50'></div>
            </div>
                {errorMessage}
            <div>
                <button onClick={()=>signInWithGoogle()} className='btn social-btn w-50 mx-auto d-block my-3'>
                    <img className='me-2' src={google} alt="" />
                     Google Sign In
                    </button>
                <button onClick={()=>signInWithGithub()} className='btn btn-dark social-btn w-50 mx-auto d-block my-3'>
                    <img className='me-2' src={github} alt="" />
                     GitHub Sign In
                    </button>
            </div>
        </div>
    );
};

export default SocialLogin;