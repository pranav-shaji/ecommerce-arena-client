import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Cookies from "js-cookie"
import Card from "./Card"

import '../styles/Home.css'
import Loading from "./Loading"
import { addProduct } from "../redux/store"
import { useDispatch, useSelector } from "react-redux"


function Home() {

    let BASE_URL = import.meta.env.VITE_BASE_URL

    // let [products, setProducts] = useState(null)

    let products = useSelector((state) => state.products.value)
    let dispatch = useDispatch()

    useEffect(() => {
        if (products) {
            return
        }
        axios.get(`${BASE_URL}/product/get-all-products`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('pranav')}`
            }
        }).then((res) => {

            console.log(res);

            // setProducts(res.data.data)

            dispatch(addProduct(res.data.data))

        }).catch(() => {

        })
    }, [])


    if (!products) {
        return (
            <Loading />
        )
    }




    return (
        <>

            <div className="home-container">
                {
                    products?.map((obj, i) => {


                        return (
                            <div key={i}>
                                <Card data={obj} index={i} />
                            </div>

                        )
                    })
                }
            </div>

        </>
    )
}

export default Home