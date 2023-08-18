import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div>
            <div className="container-fluid footerRow">
                <h1 className='footerHeading'>This is Footer</h1>
                <div className="row justify-content-between">
                    <div className="col-3 footerSection">
                        <h3>This is Block 1</h3>
                        <p className='block1'>Address : Main Street, Main Road, District, State - 112233</p>
                        <p className='block1'>Phone Number : +91-987654321</p>
                        <p className='block1'>E-Mail ID : abc@LOGO.com</p>
                    </div>
                    <div className="col-3 footerSection">
                        <h3>This is Block 2</h3>
                        <p className='links1'>Link-1</p>
                        <p className='links1'>Link-2</p>
                        <p className='links1'>Link-3</p>
                        <p className='links1'>Link-4</p>
                        <p className='links1'>Link-5</p>
                        <p className='links1'>Link-6</p>
                        <p className='links1'>Link-7</p>
                    </div>
                    <div className="col-3 footerSection">
                        <h3>This is Block 3</h3>
                        <p className='links1'>Link Next 1</p>
                        <p className='links1'>Link Next 2</p>
                        <p className='links1'>Link Next 3</p>
                        <p className='links1'>Link Next 4</p>
                        <p className='links1'>Link Next 5</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
