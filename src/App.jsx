
import React from 'react'

import Header from './component/Header'
import Home from './component/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CotextApi from './context/CotextApi'
import Signup from './component/Signup'

import { Auth0Provider } from '@auth0/auth0-react';
import Footer from './component/Footer'
const App = () => {

  return (
    <>
      <Auth0Provider
        domain="dev-v1g6qqwhp2u20pbf.us.auth0.com"
        clientId="83nNDLw2sUkxZmhpZkiKqp9DOTYELZgw"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <CotextApi>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              {/* <Route path='/' element={<Signup />} /> */}
            </Routes>

            <Footer/>
          </BrowserRouter>

        </CotextApi>
      </Auth0Provider >
    </>
  )
}

export default App