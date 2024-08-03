

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Signup from './components/Signup'
import Card from './components/Card'
import Cart from './components/Cart'
import { createContext, useContext, useState } from 'react'

import items from './data.json'
import Header from './components/Header'
import Login from './components/Login'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Details from './components/Details'
import Favourites from './components/Favourites'

// export let userContext = createContext()

function App() {

  return (
    <>

      <Provider store={store}>
        <BrowserRouter>
          {/* <userContext.Provider > */}
          <Header />
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/details/:id' element={<Details />} />
            {/* <Route path='/card' element={<Card />} /> */}
            <Route path='/cart/:id' element={<Cart />} />
            <Route path='/favourite/:id' element={<Favourites />} />

          </Routes>
          {/* </userContext.Provider> */}
        </BrowserRouter>
      </Provider>


    </>
  )
}

export default App
