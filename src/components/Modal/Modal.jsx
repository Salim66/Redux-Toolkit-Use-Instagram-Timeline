import React from 'react';
import './Modal.scss';

const Modal = ({ children }) => {
    return (
        <div className="blur">
            <div className="modal-wrapper">
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    )
};

export default Modal;