import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar1 from '../components/navbar1'
import LongBlogPost from '../components/long-blog-post'
import './reviews.css'

const Reviews = (props) => {
  return (
    <div className="reviews-container">
      <Helmet>
        <title>Reviews - Feisty Peaceful Rhinoceros</title>
        <meta
          property="og:title"
          content="Reviews - Feisty Peaceful Rhinoceros"
        />
      </Helmet>
      <Navbar1 rootClassName="navbar1-root-class-name1"></Navbar1>
      <LongBlogPost rootClassName="long-blog-post-root-class-name"></LongBlogPost>
    </div>
  )
}

export default Reviews
