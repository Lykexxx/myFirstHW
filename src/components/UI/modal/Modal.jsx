import React from 'react';
import s from './modal.module.css';

const Modal = ({children, visible, setVisible}) => {


  return (
    <div className={visible ? [s.active, s.modal].join(' ') : s.modal} onClick={() => setVisible(false)}>
      <div className={s.modal__content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
