import React from 'react'
import './Main.css'
import About from './MainComponents/About/About'
import Home from './MainComponents/Home/Home'
import Login from './MainComponents/Login/Login'
import Register from './MainComponents/Register/Register'
export default function Main(props) {
    
    if(props.render == 'HOME'){

        return (
            <>
            <Home/>
            </>
            )
    } else if(props.render == 'ABOUT'){

        return (
            <>
            <About/>
            </>
            )
    } else if(props.render == 'PRODUCT'){

        return (
            <>
            <h1>Products</h1>
            </>
            )
        } else if(props.render == 'LOGIN'){
            
            return (
            <>
            <Login/>
            </>
            )
    } else if(props.render == 'REGISTER'){

        return (
            <>
            <Register/>
            </>
            )
    }
}
