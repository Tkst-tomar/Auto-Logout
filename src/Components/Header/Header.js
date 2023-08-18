import React, { useState } from 'react'
import Main from '../Main/Main'
import './Header.css'

export default function Header() {
    let [cond, setCond] = useState('HOME')

    function changeState(data){
        if(data == 'HOME'){
            setCond(cond = data)
        } else if(data == 'ABOUT') {
            setCond(cond = data)

        } else if(data == 'PRODUCT') {
            setCond(cond = data)
            
        } else if(data == 'LOGIN') {
            setCond(cond = data)
            
        } else if(data == 'REGISTER') {
            setCond(cond = data)
        }
        console.log(cond)
    }

    return (
        <div>
            <nav className='navbar navbar-expand-lg'>
                <div className="container-fluid">
                    <div className="navbar-brand logo"><h3>LOGO</h3></div>
                    <button className="navbar-toggler" type='button' data-bs-toggle='collapse' data-bs-target='#menu'>
                        <span className="navbar-toggler-icon">XX</span>
                    </button>
                    <div className="collapse navbar-collapse" id="menu">
                    <ul className="nav">               
                        <li className="nav-item" onClick={()=> changeState('HOME')}>HOME</li>
                        <li className="nav-item" onClick={()=> changeState('ABOUT')}>ABOUT US</li>
                        <li className="nav-item" onClick={()=> changeState('PRODUCT')}>PRODUCTS</li>
                        <li className="nav-item" onClick={()=> changeState('LOGIN')}>LOGIN</li>
                        <li className="nav-item" onClick={()=> changeState('REGISTER')}>REGISTER</li>
                    </ul>
                    </div>
                </div>
            </nav>
            <Main render={cond}/>
        </div>
    )
}
