import React from 'react';
import Navbar from "./Navbar";
import { useContext } from 'react';
import ThemeContext from '../Context';
const Service = () => {
    // console.log(theme)
    // console.log(setTheme)
const{isLight} = useContext(ThemeContext);
    // console.log()
  return (
    <>
    <div className={isLight === true?'light':'dark'}>
      <Navbar   />
      <h2>Our services are not Available now soon be tell you..</h2>
      </div>
    </>
  );
};
export default Service;
