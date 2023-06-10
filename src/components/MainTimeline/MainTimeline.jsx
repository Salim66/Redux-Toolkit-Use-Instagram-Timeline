import React from 'react';
import './MainTimeline.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost, makeLove } from '../../features/timeline/timelineSlice';
import { formatDistanceToNow } from 'date-fns';
import { deletePost } from '../../features/timeline/timelineAPI';

const MainTimeline = () => {
    const posts = useSelector(getAllPost);
    const dispatch = useDispatch();
    return (
        <div className="timeline-all-posts">
            {[...posts].length > 0 ? [...posts].reverse().map(({ id, auth_name, auth_photo, post_time, content, photo, reactions }, index) => {
                return <div className="timeline-box" key={index}>
                    <div className="auth-info">
                        <img src={auth_photo} alt="" />
                        <div className="auth-details">
                            <h3>{auth_name}</h3>
                            <span>{formatDistanceToNow(post_time) === '1 minute' ? 'Just Now' : formatDistanceToNow(post_time) + " ago" }</span>
                        </div>
                        <button onClick={() => dispatch(deletePost(id))}><i class='bx bx-x'></i></button>
                    </div>
                    <div className="post-content">
                        <p>{content}</p>
                        {photo && <img src={photo} alt="" />}
                    </div>
                    <div className="post-reactions">
                        <div onClick={() => dispatch(makeLove(id, "Salim Hasan", "MERN"))} className="reaction-item">
                            <i class='bx bx-heart'></i>
                            <span>{ reactions.love }</span>
                        </div>
                        <div className="reaction-item">
                            <i class='bx bx-like' ></i>
                            <span>{reactions.like}</span>
                        </div>
                        <div className="reaction-item">
                            <i class='bx bx-dislike' ></i>
                            <span>{reactions.dislike}</span>
                        </div>
                    </div>
                </div>
            }): ""}
        </div>
    )
};

export default MainTimeline;