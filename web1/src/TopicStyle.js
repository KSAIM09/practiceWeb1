import React from 'react'
import './TopicStyle.css'

function TopicStyle({ Icon, heading, description, info }) {
  return (
    <div className='topicStyle'>
      <div className="topic__logo">
        <Icon />
      </div>
      <div className="topic__bio">
        <h2>{heading}</h2>
        <p style={{ textAlign :'left' }}>{description}</p>
        <button>{info}</button>
      </div>
    </div>
  )
}

export default TopicStyle
