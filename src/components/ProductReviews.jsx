import axios from 'axios'
import React, { useEffect, useState } from 'react'

import '../styles/ProductReviews.css'
import Loading from './Loading';

function ProductReviews({ productId }) {
    let BASE_URL = import.meta.env.VITE_BASE_URL

    console.log(productId);
    let [reviews, setReviews] = useState(null)

    useEffect(() => {

        (async () => {

            try {
                let res = await axios.get(`${BASE_URL}/review/get-product-review/${productId}`)
                console.log(res);
                if (res.data.data.length == 0) {
                    setReviews([])
                } else {
                    setReviews(res.data.data[0].reviews)

                }

            } catch (error) {
                console.log(error);
            }


        })()


    }, [])


    if (!reviews) {

        return (

            <div className='review-container'>
                <Loading />
            </div>
        )
    }



    return (
        <div className='review-container'>

            {
                reviews.length == 0 ? <h2>NO REVIEWS AVAILABLE</h2> :
                    <>
                        {
                            reviews?.map((obj, i) => {

                                return (
                                    <div key={i}>

                                        <h2>{obj.username}</h2>
                                        <p>{obj.reviewText}</p>

                                        <div className='review-images'>
                                            <img src={obj.image} height={200} width={200} />
                                            <img src={obj.image} height={200} width={200} />
                                            <img src={obj.image} height={200} width={200} />
                                        </div>

                                    </div>
                                )

                            })
                        }
                    </>

            }
        </div>
    )
}

export default ProductReviews