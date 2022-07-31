import React, { useState } from 'react';
import Navbar from './Navbar';
import './Main.css';
import Sidebar from './Sidebar';
import kerry from '../images/kerry.jpeg';

const Main = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className='container'>
      <Navbar toggle = {toggle}></Navbar>
      <Sidebar show = {show} toggle = {toggle}></Sidebar>
      <div className='content'>
        <div className='contentItems'>
          <h1 className='navHead'>Words From the Founder</h1>
          <p>
          “Making delicious coffee, riding motorcycles, adding little nods to our Japanese heritage and supporting our friends in the art world. We have hosted art shows, live music, live paintings as often as possible and through those events give back to our local communities. 

          Tar Pit is a community that has grown over the years. Our employees new and old have become part of our families and our customers becoming close friends.”

          - Kerry Sano, FOUNDER
          </p>
          <div className='btn'><a href = "https://goo.gl/maps/eHzaoVGLv9i6wkRS9">Visit Tar Pit</a></div>
        </div>
      </div>
    </div>
  );
};

export default Main;