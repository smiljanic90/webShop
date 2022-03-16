import React from 'react';
import classes from './ui/navbar.module.css';

const Navbar = () => (
  <div>
    <header className={classes.header}>
      <h1>Magic SHOP</h1>
      <div className={classes.login}>
        <p>Login</p>
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
  </div>
);

export default Navbar;
