import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, json, useNavigate } from 'react-router-dom'

import '../styles/Login.css'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/store'

function Login() {
    let BASE_URL = import.meta.env.VITE_BASE_URL

    let navigate = useNavigate()
    let dispatch = useDispatch()
    let [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    let [msg, setMsg] = useState('')
    let [color, setColor] = useState('black')


    let sendData = (e) => {
        e.preventDefault()

        axios.post(`${BASE_URL}/user/login`, userData,
        ).then((res) => {
            console.log(res);
            setMsg(res.data.message)
            if (res.status == 200) {
                setColor('green')
                // navigate('/')
                localStorage.setItem('laptop_arena', JSON.stringify(res.data.token))
                dispatch(setUser(res.data.userData))
            } else {
                setColor('red')
            }


        }).catch((err) => {
            console.log(err);
            setMsg(err.response.data.message)
            setColor('red')

        })
    }


    let getValue = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })


    }

    return (
        <div className='login-container'>
            <form className='login-form' onSubmit={sendData}>
                <h1>LOGIN</h1>
                <p style={{ color: color }}>{msg}</p>
                <div>
                    <label>Email</label>
                    <input name='email' type='text' onChange={getValue} />
                </div>
                <div>
                    <label>Password</label>
                    <input name='password' type='text' onChange={getValue} />
                </div>

                <button>submit</button>
            </form>
        </div>
    )
}

export default Login