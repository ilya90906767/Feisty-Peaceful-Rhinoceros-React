import React from 'react'

import PropTypes from 'prop-types'

import Info from './info'
import './profile-info.css'

const ProfileInfo = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="profile-info-max-width thq-section-max-width">
        <div className="profile-info-section-title">
          <div className="profile-info-content">
            <h2 className="profile-info-text thq-heading-2">
              {props.heading1}
            </h2>
          </div>
        </div>
        <div className="profile-info-content1">
          <div className="profile-info-content2">
            <div className="profile-info-row">
              <div className="profile-info-card">
                <img
                  alt={props.member1Alt}
                  src={props.member1Src}
                  className="thq-img-ratio-1-1 profile-info-placeholder-image"
                />
                <div className="profile-info-content3">
                  <div className="profile-info-title">
                    <Info></Info>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-info-content4">
            <button className="profile-info-button thq-button-filled">
              <span className="thq-body-small">{props.actionContent}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

ProfileInfo.defaultProps = {
  actionContent: 'Сохраненные маршруты',
  member1Src:
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=600',
  heading1: 'Имя Фамилия',
  member1Alt: 'Member Alt',
}

ProfileInfo.propTypes = {
  actionContent: PropTypes.string,
  member1Src: PropTypes.string,
  heading1: PropTypes.string,
  member1Alt: PropTypes.string,
}

export default ProfileInfo
