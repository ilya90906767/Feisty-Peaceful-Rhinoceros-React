import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar1 from '../components/navbar1'
import ProfileInfo from '../components/profile-info'
import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - Feisty Peaceful Rhinoceros</title>
        <meta
          property="og:title"
          content="Profile - Feisty Peaceful Rhinoceros"
        />
      </Helmet>
      <Navbar1 rootClassName="navbar1-root-class-name3"></Navbar1>
      <ProfileInfo></ProfileInfo>
    </div>
  )
}

export default Profile
