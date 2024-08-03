import React from 'react'


import "../styles/Header.css"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {



    let user = useSelector(state => state.user.value)

    console.log(user);
    let navigate = useNavigate()
    function goToLogin() {
        navigate('/login')
    }
    function goToSignup() {
        navigate('/signup')

    }
    function goToHome() {
        navigate('/')
    }

    function goToCart() {
        navigate(`/cart/${user._id}`)

    }
    function goToFavourite() {

        navigate(`/favourite/${user._id}`)
    }
    return (
        <div className='header'>
            <h1 onClick={goToHome}>LOGO</h1>
            <div className='header-menu'>
                <button onClick={goToCart}>CART 0</button>
                <button onClick={goToFavourite}>FAVIOURITE 0</button>
                {
                    user ?
                        <div>
                            <h3>{user.username}</h3>
                            <h3>{user.email}</h3>
                        </div>

                        :
                        <>
                            <button onClick={goToLogin}>LOGIN</button>
                            <button onClick={goToSignup}>SIGNUP</button>
                        </>
                }

            </div>

        </div>
    )
}

export default Header