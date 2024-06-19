import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar1 from '../components/navbar1'
import MapComp from '../components/map-comp'
import './map.css'

const Map = (props) => {
  return (
    <div className="map-container">
      <Helmet>
        <title>Map - Feisty Peaceful Rhinoceros</title>
        <meta property="og:title" content="Map - Feisty Peaceful Rhinoceros" />
      </Helmet>
      <Navbar1 rootClassName="navbar1-root-class-name"></Navbar1>
      <MapComp></MapComp>
    </div>
  )
}

export default Map
