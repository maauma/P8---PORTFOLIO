// Modal.js
import React from 'react';
import './Modal.scss';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay" onClick={() => { console.log('modal-overlay clicked'); onClose(); }}>
        <div className="modal-content" onClick={e => { e.stopPropagation(); console.log('modal-content clicked'); }}>
          <button className="close-button" onClick={onClose}>X</button>
          {children}
        </div>
      </div>
    );
  };
  

export default Modal;
