import React, { useEffect } from 'react'

import '../styles/Details.css'

import noimage from '../assets/noimage.jpg'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import ProductReviews from './ProductReviews'

function Details() {

    let { id } = useParams()

    let item = useSelector(state => state.products.value[id])





    return (
        <>
            <div className='details-container'>
                <div>
                    <img height={300} width={300} src={item.image || noimage} />
                    <h1>{item.name}</h1>
                </div>
                <div>
                    <p>{item.brand}</p>
                    <p>{item.category}</p>
                    <p>{item.price}</p>
                    <p>{item.stock}</p>
                </div>

                {/* <div className='btn-style'>
                <button onClick={() => { addToCart(i) }}>Add to Cart</button>
                <button onClick={() => { addToCart(i) }}>FAV</button>
            </div> */}

            </div>

            <div style={{marginTop:'30px'}} className='review'>
                <h2>REVIEWS</h2>
                <ProductReviews productId={item._id} />
            </div>
        </>
    )
}

export default Details