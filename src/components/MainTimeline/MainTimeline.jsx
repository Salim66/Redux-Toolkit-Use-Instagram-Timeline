import React from 'react';
import './MainTimeline.scss';
import { useSelector } from 'react-redux';
import { getAllPost } from '../../features/timeline/timelineSlice';

const MainTimeline = () => {
    const posts = useSelector(getAllPost);
    return (
        <div className="timeline-all-posts">
            {
                [...posts].reverse().map((data, index) => {
                return <div className="timeline-box">
                    <div className="auth-info">
                        <img src={data.auth_photo} alt="" />
                        <div className="auth-details">
                            <h3>{ data.auth_name }</h3>
                            <span>12 min ago</span>
                        </div>
                    </div>
                    <div className="post-content">
                        <p>{data.content}</p>
                        <img src={data.photo} alt="" />
                    </div>
                    <div className="post-reactions">
                        <div className="reaction-item">
                            <i class='bx bx-heart'></i>
                            <span>10</span>
                        </div>
                        <div className="reaction-item">
                            <i class='bx bx-like' ></i>
                            <span>10</span>
                        </div>
                        <div className="reaction-item">
                            <i class='bx bx-dislike' ></i>
                            <span>10</span>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
};

export default MainTimeline;