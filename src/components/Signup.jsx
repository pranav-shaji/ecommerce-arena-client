import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../styles/Signup.css'

function Signup() {
    let BASE_URL = import.meta.env.VITE_BASE_URL


    let [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
    })

    let [msg, setMsg] = useState('')


    let sendData = (e) => {
        e.preventDefault()
        console.log(userData);

        axios.post(`${BASE_URL}/user/signup`, userData,).then((res) => {
            console.log(res);
            setMsg(res.data.message)
            if (res.status == 200) {
                setColor('green')
                localStorage.setItem('laptop_arena', JSON.stringify(res.data.token))
                dispatch(setUser(res.data.userData))
                navigate('/')
            } else {
                setColor('red')
            }
        }).catch((err) => {
            console.log(err);
        })
    }


    let getValue = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })


    }

    return (
        <div className='signup-container'>
            <form className='signup-form' onSubmit={sendData}>
                <h1>SIGNUP</h1>
                <p>{msg}</p>
                <div>
                    <label>Username</label>
                    <input name='username' type='text' onChange={getValue} />
                </div>
                <div>
                    <label>Email</label>
                    <input name='email' type='text' onChange={getValue} />
                </div>
                <div>
                    <label>Password</label>
                    <input name='password' type='text' onChange={getValue} />
                </div>


                <button>submit</button>

                <Link to='/login'>
                    Login
                </Link>

                <div>
                    <button type='button'>
                        <a href={`${BASE_URL}/auth/google`}>GOOGLE SIGNUP</a>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Signup