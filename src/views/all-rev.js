import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar1 from '../components/navbar1'
import ShortBlogPost from '../components/short-blog-post'
import './all-rev.css'

const AllRev = (props) => {
  return (
    <div className="all-rev-container">
      <Helmet>
        <title>AllRev - Feisty Peaceful Rhinoceros</title>
        <meta
          property="og:title"
          content="AllRev - Feisty Peaceful Rhinoceros"
        />
      </Helmet>
      <Navbar1 rootClassName="navbar1-root-class-name2"></Navbar1>
      <ShortBlogPost rootClassName="short-blog-post-root-class-name"></ShortBlogPost>
    </div>
  )
}

export default AllRev
