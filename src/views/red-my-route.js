import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar1 from '../components/navbar1'
import RouteInfo from '../components/route-info'
import './red-my-route.css'

const RedMyRoute = (props) => {
  return (
    <div className="red-my-route-container">
      <Helmet>
        <title>RedMyRoute - Feisty Peaceful Rhinoceros</title>
        <meta
          property="og:title"
          content="RedMyRoute - Feisty Peaceful Rhinoceros"
        />
      </Helmet>
      <Navbar1 rootClassName="navbar1-root-class-name5"></Navbar1>
      <RouteInfo rootClassName="route-info-root-class-name"></RouteInfo>
    </div>
  )
}

export default RedMyRoute
