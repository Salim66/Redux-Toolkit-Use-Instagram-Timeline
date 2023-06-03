import React from 'react'
import './Timeline.scss';
import CreatePost from '../../components/CreatePost/CreatePost';
import MainTimeline from '../../components/MainTimeline/MainTimeline';

const Timeline = () => {
  return (
    <div className="timeline-wrapper">
      <div className="timeline-middle">
        <CreatePost />
        <MainTimeline />
      </div>
    </div>
  )
}

export default Timeline