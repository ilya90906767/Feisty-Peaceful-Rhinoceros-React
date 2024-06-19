import React from 'react'

import PropTypes from 'prop-types'

import './short-blog-post.css'

const ShortBlogPost = (props) => {
  return (
    <div
      className={`short-blog-post-content thq-section-padding ${props.rootClassName} `}
    >
      <div className="short-blog-post-max-width thq-section-max-width">
        <div className="short-blog-post-header">
          <div className="short-blog-post-content1">
            <h1 className="thq-heading-1 short-blog-post-text">
              {props.blogPostTitle}
            </h1>
            <div className="short-blog-post-rate"></div>
          </div>
          <div className="short-blog-post-content2">
            <div className="short-blog-post-avatar">
              <img
                alt={props.avatarImageAlt}
                src={props.avatarImageSrc}
                className="short-blog-post-author-image thq-img-round thq-img-ratio-1-1"
              />
              <div className="short-blog-post-content3">
                <span className="short-blog-post-text1 thq-body-small">
                  {props.avatarName}
                </span>
                <div className="short-blog-post-time">
                  <span className="thq-body-small">{props.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt={props.blogPostImageAlt}
          src="/photo_2024-06-15_22-34-16-1400w.jpg"
          className="thq-img-ratio-16-9"
        />
        <div className="short-blog-post-container">
          <button
            type="submit"
            className="short-blog-post-button thq-button-filled"
          >
            <span className="short-blog-post-text3 thq-body-small">
              {props.action1}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

ShortBlogPost.defaultProps = {
  date: '20 March 2024',
  blogPostImageAlt: 'PlaceholderImage3501',
  avatarImageSrc:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=1400',
  rootClassName: '',
  action1: 'Читать обзор',
  avatarImageAlt: 'a',
  avatarName: 'Анна Скворцова',
  blogPostTitle: 'Первая поездка в Волгоград',
}

ShortBlogPost.propTypes = {
  date: PropTypes.string,
  blogPostImageAlt: PropTypes.string,
  avatarImageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  action1: PropTypes.string,
  avatarImageAlt: PropTypes.string,
  avatarName: PropTypes.string,
  blogPostTitle: PropTypes.string,
}

export default ShortBlogPost
