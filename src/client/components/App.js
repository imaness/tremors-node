import React, { Fragment, useState } from 'react';
import Body from './Body'



export default function App() {
  return (
    <>
      {/* <div className="navbar navbar-default navbar-fixed-top">
          <div className="container">
              <div className="navbar-header"><button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse"><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button><a className="navbar-brand" href="/">Tremors</a></div>
              <div
                  className="navbar-collapse collapse">
                  <ul className="nav navbar-nav navbar-right">
                      <li> <a href="/">Home</a></li>
                      <li> <a href="#about-dialog" data-toggle="modal" data-target="#about-dialog">About</a></li>
                      <li><a href="#contact-dialog" data-toggle="modal" data-target="#contact-dialog">Contact</a></li>
                  </ul>
          </div>
      </div>
      </div> */}
      <Body/>
    </>
  );
}