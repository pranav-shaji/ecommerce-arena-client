import React, { useContext, useState } from 'react'

import logo from '/vite.svg'
import { Link, useNavigate } from 'react-router-dom'

import items from "../data.json"
// import { cardContext } from '../App'

import '../styles/Card.css'

import noimage from '../assets/noimage.jpg'
import axios from 'axios'

function Card({ data, index }) {

    let BASE_URL = import.meta.env.VITE_BASE_URL

    function addToCart() {

        // (async () => {
        //     try {
        //         let res = await axios.put(`${BASE_URL}`)
        //         console.log(res);
        //     } catch (error) {
        //         console.log(error);
        //     }
        // })()


    }

    return (

        <>





            <div className='card'>
                <Link to={`/details/${index}`}>
                    <img height={170} width={170} src={data.image || noimage} />
                    <p>{data.name}</p>
                </Link>

                <div className='btn-style'>


                    <button onClick={() => { addToCart() }}>Add to Cart</button>
                    <button onClick={() => { addToFavourite() }}>FAV</button>



                </div>

            </div >

        </>
    )
}

export default Card