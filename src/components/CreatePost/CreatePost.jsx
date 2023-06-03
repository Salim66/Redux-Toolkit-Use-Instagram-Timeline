import React, { useState } from 'react';
import './CreatePost.scss';
import Modal from '../Modal/Modal';

const CreatePost = () => {

  const [modal, setModal] = useState(false);

  return (
    <div className="timeline-create-post">
      {modal && 
        <Modal>
          <div className="post-form">
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Auth Photo' />
            <input type="text" placeholder='Post Content' />
            <input type="text" placeholder='Post Photo' />
            <div className="btns">
              <button>Create Post</button>
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