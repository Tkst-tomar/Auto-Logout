import React from 'react'
import './Login.css'
export default function Login() {
    return (
        <div className='login'>
            <div className="container-fluid">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-2 image"><h2>Image</h2></div>
                        <div className="col-4">
                            <h1>Login</h1>
                            <p>Do you have an account ? <span className='register'>Click to Register</span></p>
                            <input type="text" placeholder='Username or E-mail'/>
                            <input type="text" placeholder='Password'/>
                            <div className="securityCode d-flex justify-content-between align-items-center">
                            <input type="text" placeholder='Security Code'/><div className="securityImage">1234</div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className='d-flex align-items-center'>
                                    <input type="checkbox" name="checkBox" id="check" />
                                    <label htmlFor="checkBox">Remember Me</label>
                                </div>
                                <div>
                                    <p className='forgotPassword'>Forgot Password ?</p>
                                </div>
                            </div>
                            <div className="btn btn-primary">Login</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
