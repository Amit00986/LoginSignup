import React, { useState } from 'react'
import axios from 'axios';
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'
import email_icon from '../Assets/email.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");
    const [data, setData] = useState({
        name: "",
        password: "",
        email: ""
    })
    const notifySuccess = () => {
        toast.success('Data successfully saved!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    return (
        <div className='conatiner'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === 'Login' ? <div></div> : <div className='input'>
                    <img src={user_icon} alt='' />
                    <input type='text' placeholder='Name' onChange={(e) => {
                        setData({ ...data, name: e.target.value })
                    }} />
                </div>}
                <div className='input'>
                    <img src={email_icon} alt='' />
                    <input type='email' placeholder='Email Id' onChange={(e) => {
                        setData({ ...data, email: e.target.value })
                    }} />
                </div>
                <div className='input'>
                    <img src={password_icon} alt='' />
                    <input type='password' placeholder='Password' onChange={(e) => {
                        setData({ ...data, password: e.target.value })
                    }} />
                </div>
            </div>
            <div className="forgot-password"> Lost Password? <span>Click Here!</span></div>
            <div className='submit-container'>
                <div className={action === 'Login' ? "submit gray" : "submit"} onClick={() => {
                    setAction("Sign Up")
                    console.log(data)
                    axios.post('http://localhost:8000/v1/login/loginPage', data)
                        .then(response => {
                            console.log(response.data);
                            notifySuccess();
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        })
                }}>Sign Up</div>
                <div className={action === 'Sign Up' ? "submit gray" : "submit"} onClick={() => {
                    setAction("Login")

                }}>Login</div>
            </div>
            <ToastContainer />
        </div>

    )
};

export default LoginSignup
