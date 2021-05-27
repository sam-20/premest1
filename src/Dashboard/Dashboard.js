import React from 'react'
import { useHistory } from 'react-router'
import { useState } from 'react-router-dom'

function Dashboard() {
    return (
        <div className='main'>
            
            <div classname='ds1'>
               <h1>Bella's Recipe Place</h1>
            </div>

            <div classname='ds2'>
                <p>Customer's name </p>
                <p>Dashboard</p>
                <p>Favorites</p>
                <p>Learn more</p>
                <p>Competitions</p>
                <p>Need a caterer</p>

            </div>

            <div className='ds3'>
                <img className='img2' src='imageslogo.jpg' alt='a plate of rice'></img>
            </div>
        </div>
    )
}

export default Dashboard
