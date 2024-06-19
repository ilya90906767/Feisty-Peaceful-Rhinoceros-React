import React from 'react'

import PropTypes from 'prop-types'

import './map-settings.css'

const MapSettings = (props) => {
  return (
    <div className="map-settings-contact11 thq-section-padding">
      <div className="map-settings-max-width thq-section-max-width">
        <div className="map-settings-section-title thq-card">
          <div className="map-settings-content">
            <h2 className="thq-heading-2 map-settings-text">
              {props.heading1}
            </h2>
            <p className="thq-body-large map-settings-text1">
              {props.content1}
            </p>
          </div>
        </div>
        <div className="map-settings-content1">
          <form className="map-settings-form thq-card">
            <div className="map-settings-input">
              <input
                type="text"
                id="contact-form-9-email"
                required="true"
                placeholder="Введите пункт назначения"
                className="thq-input"
              />
              <button type="button" className="button map-settings-button">
                {props.button}
              </button>
            </div>
            <div className="map-settings-container">
              <div className="map-settings-input1">
                <label
                  htmlFor="contact-form-9-options"
                  className="thq-body-small map-settings-text2"
                >
                  <span>Инвалидность</span>
                  <br></br>
                </label>
                <select
                  id="contact-form-9-options"
                  placeholder="Select one"
                  className="thq-select map-settings-select"
                >
                  <option value="Option1">по Слуху</option>
                  <option value="Option 1">по Зрению</option>
                  <option value="Option 1">на кресле-коляске</option>
                  <option value="Option 2">с нарушением ОДА</option>
                  <option value="Option 3">с умственными нарушениями</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="thq-button-filled map-settings-button1"
            >
              <span className="thq-body-small">{props.action}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

MapSettings.defaultProps = {
  content1: 'Постройте свой маршрут на интерактивной карте города',
  button: 'Добавить пункт',
  heading1: 'Ваш маршрут',
  action: 'Построить',
}

MapSettings.propTypes = {
  content1: PropTypes.string,
  button: PropTypes.string,
  heading1: PropTypes.string,
  action: PropTypes.string,
}

export default MapSettings
