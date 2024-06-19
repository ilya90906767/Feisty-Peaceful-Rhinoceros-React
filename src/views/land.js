import React from 'react'

import { Helmet } from 'react-helmet'

import './land.css'

const Land = (props) => {
  return (
    <div className="land-container">
      <Helmet>
        <title>Feisty Peaceful Rhinoceros</title>
        <meta property="og:title" content="Feisty Peaceful Rhinoceros" />
      </Helmet>
      <div className="land-container1">
        <img
          alt="image"
          src="/monument-birthplace-russia-volgograd-1500w.jpg"
          loading="lazy"
          className="land-image"
        />
        <h1 className="land-text">
          <span>Доступный Волгоград</span>
          <br></br>
          <br></br>
        </h1>
        <button type="submit" className="land-button thq-button-filled">
          <span className="land-text4 thq-body-small">Войти</span>
        </button>
      </div>
    </div>
  )
}

export default Land
