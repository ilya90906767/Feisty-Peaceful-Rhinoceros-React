import React from 'react'

import PropTypes from 'prop-types'

import './routes.css'

const Routes = (props) => {
  return (
    <div className="routes-container thq-section-padding">
      <div className="routes-max-width thq-section-max-width">
        <div className="routes-content thq-flex-column">
          <ul className="routes-ul thq-flex-column">
            <li className="thq-flex-column list-item routes-li">
              <h2 className="routes-heading1 thq-heading-2">
                {props.heading1}
              </h2>
              <button className="routes-button thq-button-outline">
                <span className="thq-body-small">
                  <span>Подробнее</span>
                  <br></br>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

Routes.defaultProps = {
  heading1: 'Название пути',
}

Routes.propTypes = {
  heading1: PropTypes.string,
}

export default Routes
