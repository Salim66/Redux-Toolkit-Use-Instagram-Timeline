import React, { useState } from 'react';
import './CreatePost.scss';
import Modal from '../Modal/Modal';
import { useDispatch } from 'react-redux';
import { createPost } from '../../features/timeline/timelineAPI';

const CreatePost = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState({
    auth_name: "",
    auth_photo: "",
    content: "",
    photo: ""
  });

  const handleInput = (e) => {
    setInput((prevState) => ({...prevState, [e.target.name] : e.target.value}));
  }

  const handlePostCreate = (e) => {
    e.preventDefault();
    dispatch(createPost(input));
    setModal(false);
  }

  return (
    <div className="timeline-create-post">
      {modal && 
        <Modal>
          <div className="post-form">
            <input type="text" name='auth_name' placeholder='Name' onChange={handleInput} />
            <input type="text" name='auth_photo' placeholder='Auth Photo' onChange={handleInput} />
            <input type="text" name='content' placeholder='Post Content' onChange={handleInput} />
            <input type="text" name='photo' placeholder='Post Photo' onChange={handleInput} />
            <div className="btns">
              <button onClick={handlePostCreate}>Create Post</button>
              <button onClick={() => setModal(!modal)}>Close</button>
            </div>
          </div>
        </Modal>}
      <button onClick={() => setModal(!modal)}>
        <i class='bx bx-plus-medical'></i>
        Create new post
      </button>
    </div>
  )
}

export default CreatePost