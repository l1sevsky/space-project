import React from 'react';
import { Header } from 'components/General/Header';
import { Link } from "react-router-dom";
import css from './index.module.scss';

export const MainPage = () => {
  // <div style={{'background': 'gold', 'width': 400, 'height': 200, 
  //   'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'}}>
  //   Beaty from NASA for YOU
  // </div>

  return (
    <div className={css.layout}>
      <Header />
      <div className={css.content}>
        <Link to={"/apod"}>Daily Pictures</Link>
        <Link to={"/asteroids"}>Asteroids</Link>
        <Link to={"auth"}>Log in</Link>
        <Link to={"register"}>Sign Up</Link>
      </div>
    </div>
  )
};
