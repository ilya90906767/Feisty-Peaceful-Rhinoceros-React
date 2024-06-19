import React from 'react'

import PropTypes from 'prop-types'

import './info.css'

const Info = (props) => {
  return (
    <div className="info-contact1 thq-section-padding">
      <div className="thq-section-max-width thq-flex-row info-max-width">
        <form className="info-form thq-flex-column">
          <div className="info-container">
            <div className="info-input">
              <label
                htmlFor="contact-form-6-first-name"
                className="thq-body-small"
              >
                Имя
              </label>
              <input
                type="text"
                id="contact-form-6-first-name"
                placeholder="Имя"
                className="thq-input"
              />
            </div>
            <div className="info-input1">
              <label
                htmlFor="contact-form-6-last-name"
                className="thq-body-small"
              >
                Фамилия
              </label>
              <input
                type="text"
                id="contact-form-6-last-name"
                placeholder="Фамилия"
                className="thq-input"
              />
            </div>
          </div>
          <div className="info-container1">
            <div className="info-input2">
              <label htmlFor="contact-form-6-email" className="thq-body-small">
                Почта
              </label>
              <input
                type="email"
                id="contact-form-6-email"
                required="true"
                placeholder="Почта"
                className="thq-input"
              />
            </div>
          </div>
          <div className="info-container2">
            <div className="info-input3">
              <label
                htmlFor="contact-form-6-options"
                className="thq-body-small"
              >
                Категория ивалидности
              </label>
              <select
                id="contact-form-6-options"
                placeholder="Select one"
                className="thq-select"
              >
                <option value="Option 1">Инвалид по слуху</option>
                <option value="Option 1">Инвалид по зрению</option>
                <option value="Option 2">Инвалид на кресле-коляске</option>
                <option value="Option 2">Инвалид с нарушением ОДА</option>
                <option value="Option 3">
                  Инвалид с умственными нарушениями
                </option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
          </div>
          <div className="info-container3">
            <div className="info-input4">
              <label
                htmlFor="contact-form-6-message"
                className="thq-body-small"
              >
                Расскажите о себе
              </label>
              <textarea
                id="contact-form-6-message"
                rows="3"
                placeholder="Обо мне"
                className="thq-input"
              ></textarea>
            </div>
          </div>
          <button type="submit" className="info-button thq-button-filled">
            <span className="thq-body-small">{props.action}</span>
          </button>
        </form>
      </div>
    </div>
  )
}

Info.defaultProps = {
  action: 'Изменить',
}

Info.propTypes = {
  action: PropTypes.string,
}

export default Info
