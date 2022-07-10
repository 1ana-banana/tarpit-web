import React, { useState } from 'react';
import Navbar from './Navbar';
import './Main.css';
import Sidebar from './Sidebar';

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
          <h1 className='navHead'>Vegan, Gluten-Free Cakes</h1>
          <p>
          “In 2010 I was talking with friends and we decided that we needed a better place to hang out. Where we didn’t feel like we had to drink alcohol, had to buy dinner, or leave after a certain amount of time. By early 2011 I found the perfect location. Tar Pit started as a dream to for a cool hang out spot. We built everything in the shop by hand. This includes removing beams from a friends Brooklyn warehouse for the counter tops to custom fitting the bathroom sink and vintage knobs - its all been an act of love. We wanted to feel like we were sitting around the living room of our favorite grandparent. Both nostalgic and comfortable aaaand maybe a little bit weird. Over the years we’ve changed it up but that same feeling is important. Comfort, familiarity and good company.

          There were just a few things that mattered at that time. Making delicious coffee, riding motorcycles, adding little nods to our Japanese heritage and supporting our friends in the art world. We have hosted art shows, live music, live paintings as often as possible and through those events give back to our local communities. Honestly, not much has changed. We still love a great coffee, motorcycles, music and art. We still love hanging out with our friends and sharing ideas and we still do what we can to support our communities.

          The coffee shop has allowed us to expand that friend group to the entire neighborhood. Tar Pit is a community that has grown over the years. Our employees new and old have become part of our families and our customers becoming close friends.”

          - Kerry Sano, FOUNDER
          </p>
          <div className='btn'>Visit Tar Pit</div>
        </div>
      </div>
    </div>
  );
};

export default Main;