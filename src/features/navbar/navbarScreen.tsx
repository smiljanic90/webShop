import React, { useState } from 'react';
import classes from './ui/navbar.module.css';
import Modal from '../../components/modal/modal';

const Navbar = () => {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  };

  // const hideCartHandler = () => {
  //   setIsCartShown(false);
  // };
  return (
    <div>
      <header className={classes.header}>
        <h1>Magic SHOP</h1>
        <div className={classes.login}>
          <button type="submit" onClick={showCartHandler}>Login</button>
          <p>Signup</p>
        </div>
        {/* <HeaderCartButton onClick={onShowCart} /> */}
      </header>
      <div className={classes.mainImage}>
        <img
          src="https://i.pinimg.com/originals/0a/4d/cb/0a4dcb92fa2d3c601b58d72720d6bec4.jpg"
          alt="Table with Food"
        />
      </div>
      {isCartShown && (
        <Modal>
          <p>Modal</p>
        </Modal>
      )}
    </div>
  );
};

export default Navbar;
