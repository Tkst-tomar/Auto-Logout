import React from 'react'
import Carousel from './Carousel/Carousel'
import './Home.css'

export default function Home() {
    return (
        <div className='home'>
            <Carousel/>
            <div className="banner">
                <div className="banner1">
                <h2>This is Banner</h2>
                </div>
            </div>
            <div className="productList">
                <h2>This is Product List</h2>
            </div>
        </div>
    )
}
