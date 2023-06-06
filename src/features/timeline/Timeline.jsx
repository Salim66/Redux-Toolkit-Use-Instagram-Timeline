import React, { useEffect } from 'react'
import './Timeline.scss';
import CreatePost from '../../components/CreatePost/CreatePost';
import MainTimeline from '../../components/MainTimeline/MainTimeline';
import { useDispatch } from 'react-redux';
import { fetchPost } from './timelineAPI';

const Timeline = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, []);

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