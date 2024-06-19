import React from 'react'

import PropTypes from 'prop-types'

import MapSettings from './map-settings'
import './map-comp.css'

const MapComp = (props) => {
  return (
    <div className="map-comp-header5 thq-section-padding">
      <div className="map-comp-container">
        <div className="map-comp-container1"></div>
        <MapSettings></MapSettings>
      </div>
    </div>
  )
}

MapComp.defaultProps = {
  heading1: 'Построение маршрута',
}

MapComp.propTypes = {
  heading1: PropTypes.string,
}

export default MapComp
