import React from 'react'

import PropTypes from 'prop-types'

import Timeline from './timeline'
import './long-blog-post.css'

const LongBlogPost = (props) => {
  return (
    <div
      className={`long-blog-post-content thq-section-padding ${props.rootClassName} `}
    >
      <div className="long-blog-post-max-width thq-section-max-width">
        <div className="long-blog-post-header">
          <div className="long-blog-post-content1">
            <h1 className="thq-heading-1 long-blog-post-text">
              {props.blogPostTitle}
            </h1>
            <div className="long-blog-post-rate"></div>
          </div>
          <div className="long-blog-post-content2">
            <div className="long-blog-post-avatar">
              <img
                alt={props.avatarImageAlt}
                src={props.avatarImageSrc}
                className="long-blog-post-author-image thq-img-round thq-img-ratio-1-1"
              />
              <div className="long-blog-post-content3">
                <span className="long-blog-post-text1 thq-body-small">
                  {props.avatarName}
                </span>
                <div className="long-blog-post-time">
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
        <Timeline
          rootClassName="timeline-root-class-name1"
          className=""
        ></Timeline>
        <div className="long-blog-post-container">
          <button
            type="submit"
            className="long-blog-post-button thq-button-filled"
          >
            <span className="long-blog-post-text3 thq-body-small">
              {props.action11}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

LongBlogPost.defaultProps = {
  avatarImageSrc:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=1400',
  avatarName: 'Анна Скворцова',
  blogPostTitle: 'Первая поездка в Волгоград',
  avatarImageAlt: 'a',
  date: '20 March 2024',
  blogPostImageAlt: 'PlaceholderImage3501',
  rootClassName: '',
  action11: 'Сохранить себе',
}

LongBlogPost.propTypes = {
  avatarImageSrc: PropTypes.string,
  avatarName: PropTypes.string,
  blogPostTitle: PropTypes.string,
  avatarImageAlt: PropTypes.string,
  date: PropTypes.string,
  blogPostImageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  action11: PropTypes.string,
}

export default LongBlogPost
