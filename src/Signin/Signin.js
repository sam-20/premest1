import React from 'react'
import './Signin.css'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'


function Signin() {

    let history = useHistory();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function signin() {
        if ((username == 'Babel, Nana, Akua, Sammy') && (password == '1234, abdc, tcltv')) {
            history.push('./dashboard')
        }
        else {
            alert('Wrong username or password')
        }
    }

    return (
        <div className='in'>

            <form className='f1'>
                <div className='welcome'>
                    <h2>Welcome Dear Customer</h2>
                    <h3>Please login in here</h3>
                </div>

                <div className='welcome1'>
                    <input className='user' type='text' name='Username' placeholder='Username' />
                    <br></br>
                    <br></br>
                    <input className='password' type='numbers' name='Password' placeholder='Password' />

                    <button className='b1' onClick={signin} >Login</button>
                </div>

                <div classname='l1'>
                    <a href='forgotps' className='link1'>Forgot Password?</a>

                </div>

                <div classname='l2'>
                    <p className='link2'> Don't have an account yet? <a className='link2' href='createnewacc'>Create one</a> </p>

                </div>

            </form>

            <div>
                <img className='signin_pic' src="Waakyelogo" alt="It's Ghana's favorite breakfast. Waakye!"></img>
            </div>

        </div>
    )
}



export default Signin