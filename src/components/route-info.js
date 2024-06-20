import React from 'react'

import PropTypes from 'prop-types'

import './route-info.css'

const RouteInfo = (props) => {
  return (
    <div
      className={`route-info-contact1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="thq-section-max-width thq-flex-row route-info-max-width">
        <form className="route-info-form thq-flex-column">
          <div className="route-info-container">
            <div className="route-info-input">
              <label
                htmlFor="contact-form-6-first-name"
                className="thq-body-small"
              >
                Название Маршрута
              </label>
              <input
                type="text"
                id="contact-form-6-first-name"
                placeholder="Маршрут"
                className="thq-input"
              />
            </div>
            <div className="route-info-container1">
              <div className="route-info-input1">
                <label
                  htmlFor="contact-form-6-message"
                  className="thq-body-small"
                >
                  Общее описание маршрута
                </label>
                <textarea
                  id="contact-form-6-main_route_info"
                  rows="3"
                  placeholder="Про маршрут"
                  className="thq-input"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="route-info-container2">
            <div className="route-info-input2">
              <label
                htmlFor="contact-form-6-options"
                className="thq-body-small"
              >
                <span className="">Ваша оценка</span>
                <br className=""></br>
              </label>
              <select
                id="contact-form-6-options"
                placeholder="Select one"
                className="thq-select"
              >
                <option value="Option 1" className="">
                  1
                </option>
                <option value="Option 2" className="">
                  2
                </option>
                <option value="Option 3" className="">
                  3
                </option>
                <option value="Option 1" className="">
                  4
                </option>
                <option value="Option 1" className="">
                  5
                </option>
              </select>
            </div>
          </div>
          <div className="route-info-mapinrev"></div>
          <div className="route-info-container3">
            <div className="route-info-input3">
              <label
                htmlFor="contact-form-6-first-name"
                className="thq-body-small"
              >
                <span className="">Первая точка</span>
                <br className=""></br>
              </label>
              <input
                type="text"
                id="contact-form-6-first-name"
                placeholder="Первая точка"
                className="thq-input"
              />
            </div>
            <div className="route-info-input4">
              <label
                htmlFor="contact-form-6-message"
                className="thq-body-small"
              >
                Описание первой точки
              </label>
              <textarea
                id="contact-form-6-message"
                rows="3"
                placeholder="Первая точка"
                className="thq-input"
              ></textarea>
            </div>
          </div>
          <button type="submit" className="route-info-button thq-button-filled">
            <span className="thq-body-small">{props.action}</span>
          </button>
          <div className="route-info-container4">
            <button className="route-info-button1 thq-button-outline">
              <span className="thq-body-small">
                <span className="">Опубликовать обзор маршрута</span>
                <br className=""></br>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

RouteInfo.defaultProps = {
  action: 'Сохранить',
  rootClassName: '',
}

RouteInfo.propTypes = {
  action: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default RouteInfo
