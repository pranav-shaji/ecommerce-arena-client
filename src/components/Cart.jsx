import React, { useEffect, useState } from 'react'
import '../styles/Cart.css'
import Loading from './Loading'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Cart() {

    let BASE_URL = import.meta.env.VITE_BASE_URL

    let { id: userId } = useParams()
    let [items, setItems] = useState(null)

    useEffect(() => {

        (async () => {

            try {
                let res = await axios.get(`${BASE_URL}/cart/get-cart/${userId}`)
                console.log(res);
                setItems(res.data.data)

            } catch (error) {
                console.log(error);
            }


        })()

    }, [])





    if (!items) {

        return (
            <Loading />
        )

    }

    if (items.length == 0) {
        return (
            <div className='cart-container'>
                <h1>NO CART ITEMS</h1>
            </div>
        )
    }


    return (
        <div className='cart-container'>

            {
                items.map((obj, i) => {

                    return (
                        <div>
                            <img src={obj.image} height={200} width={200} />
                            <div>
                                <h2>{obj.name}</h2>
                                <p>{obj.price}</p>
                            </div>
                            <a href={`${BASE_URL}/payment/pay`}>
                                <button>PROCEED TO PAY</button>
                            </a>
                        </div>
                    )
                })
            }

        </div >
    )
}

export default Cart