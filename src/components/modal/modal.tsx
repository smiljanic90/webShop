import React from 'react';
import classes from './modal.module.css';

const Modal = ({ children }) => (
  <div className={classes.modal}>
    <div className={classes.content}>{children}</div>
  </div>
);
export default Modal;
