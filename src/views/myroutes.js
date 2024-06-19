import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar1 from '../components/navbar1'
import Routes from '../components/routes'
import './myroutes.css'

const Myroutes = (props) => {
  return (
    <div className="myroutes-container">
      <Helmet>
        <title>Myroutes - Feisty Peaceful Rhinoceros</title>
        <meta
          property="og:title"
          content="Myroutes - Feisty Peaceful Rhinoceros"
        />
      </Helmet>
      <Navbar1 rootClassName="navbar1-root-class-name4"></Navbar1>
      <Routes></Routes>
    </div>
  )
}

export default Myroutes
