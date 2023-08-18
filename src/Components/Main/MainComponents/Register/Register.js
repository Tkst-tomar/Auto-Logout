import React from 'react'
import './Register.css'
export default function Register() {
    return (
        <div className='register d-flex justify-content-around align-items-center'>
            <div className="col-5 formData">
                <h1>Create An account</h1>
                <p>Already have an Account ? <span className='linkforLogin'>Login</span></p>
                <input className='pad' type="text" placeholder='Username' />
                <input className='pad' type="text" placeholder='E-mail' />
                <input className='pad' type="text" placeholder='Password' />
                <input className='pad' type="text" placeholder='Confirm Password' />
                <div className="d-flex justify-content-between ">

                    <input className='pad' type="text" placeholder='Security Code' /><div className="imageCode">1234</div>

                </div>
                <div className="radioBox1">
                    <div className="d-flex align-items-center">
                        <input className='pad1' type="radio" name="type" id="customer" />
                        <label htmlFor="customer">I am Customer</label>
                    </div>
                    <div className="d-flex align-items-center">
                        <input className='pad1' type="radio" name="type" id="vendor" />
                        <label htmlFor="vendor">I am Vendor</label>
                    </div>
                </div>
                <div className="checkBox d-flex align-items-center">
                    <input className='pad1' type="checkbox" name="check" id="" />
                    <label htmlFor="check">I agree to terms & policy</label>
                </div>
                <div className="btn btn-primary">Submit & Register</div>
            </div>
            <div className="col-3 linksForAccn">
                <div className="linkBox">
                    <div className="box1 box">
                        <h3>Continue with Facebook</h3>
                    </div>
                    <h3 className='text-center'>OR</h3>
                    <div className="box2 box">
                        <h3>Continue with Google</h3>
                    </div>
                    <h3 className='text-center'>OR</h3>
                    <div className="box3 box">
                        <h3>Continue with Apple</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
