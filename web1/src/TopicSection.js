import React from 'react'
import './TopicSection.css'
import TopicStyle from './TopicStyle'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';


function TopicSection() {
  return (
    <div className='topicSection'>
        <div className="topic__left">
            <TopicStyle 
                Icon={SupervisorAccountIcon}
                heading='lorem10'
                description='lorem10lorem10lorem10'
                info='Learn More'
            />
            <TopicStyle 
                Icon={SupervisorAccountIcon}
                heading='lorem10'
                description='lorem10lorem10lorem10'
                info='Learn More'
            />
            <TopicStyle 
                Icon={SupervisorAccountIcon}
                heading='lorem10'
                description='lorem10lorem10lorem10'
                info='Learn More'
            />

        </div>
        <div className="topic__right">
            <TopicStyle
                Icon={SupervisorAccountIcon}
                heading='lorem10'
                description='lorem10lorem10lorem10'
                info='Learn More'
            />
            <TopicStyle 
                Icon={SupervisorAccountIcon}
                heading='lorem10'
                description='lorem10lorem10lorem10'
                info='Learn More'
            />
            <TopicStyle 
                Icon={SupervisorAccountIcon}
                heading='lorem10'
                description='lorem10lorem10lorem10'
                info='Learn More'
            />
        </div>
      
    </div>
  )
}


export default TopicSection
