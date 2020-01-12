import React, { Fragment, useState } from 'react';
import BarangayList from './BarangayList';
import GoogleMaps from './GoogleMaps';

const Body = () => {
  return (
    <>
      <div id="map-canvas-2">
        <GoogleMaps />
      </div>
      {/* <div className="navbar navbar-default navbar-fixed-top">
          <div className="container">
              <div className="navbar-header">
                <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">Tremors</a>
              </div>
              <div className="navbar-collapse collapse">
                  <ul className="nav navbar-nav navbar-right">
                      <li> <a href="/">Home</a></li>
                      <li> <a href="#about-dialog" data-toggle="modal" data-target="#about-dialog">About</a></li>
                      <li><a href="#contact-dialog" data-toggle="modal" data-target="#contact-dialog">Contact</a></li>
                  </ul>
              </div>
          </div>
      </div>
      <div id="map-canvas"></div>
      <div className="btn btn-container-donate" id="mobile-donate"></div><button className="btn btn-primary pull-right" data-toggle="modal" data-target="#legend-modal" id="legend-modal-button">Show Map Legend</button>
      <div className="legend-container" id="legend">
          <div className="map-legends">
              <div className="row">
                  <div className="col-md-2">
                      <div className="line"></div>
                      <div className="line-text">Old</div>
                  </div>
                  <div className="col-md-2">
                      <div className="line"></div>
                      <div className="line-text">Certain</div>
                  </div>
                  <div className="col-md-2">
                      <div className="line"></div>
                      <div className="line-text">Approximate</div>
                  </div>
                  <div className="col-md-2">
                      <div className="line"></div>
                      <div className="line-text">Fissure</div>
                  </div>
                  <div className="col-md-4" style={{paddingTop: '7px'}}>
                      <div className="circle"></div>
                      <div className="line-text" style={{marginTop: '4px'}}>Population Density</div>
                  </div>
              </div>
          </div>
      </div>
      <div className="main-panel">
        <div className="main-panel-container" id="search-container">
          <span id="desktop-donate"></span>
          <label htmlFor="search-address">Locate</label>
          <input autoFocus id="search-address" 
            className="form-control" 
            placeholder="Locate City, Province, Address" />
          <div className="main-panel-list" ng-controller="cityController as cityCntrl">
            <div className="vert-cut">
              <div className="west-fault">
                <h4>West Valley Fault</h4>
                {<BarangayList />}
              </div>

            </div>

          </div>
        </div>
      </div>
      <div className="modal fade" id="about-dialog" tabIndex="-1" role="dialog" aria-labelledby="about" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-body"><button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h2 style={{marginTop: 0}}>Project Tremors<small>v1.0.0</small></h2>
                    <div className="row">
                        <div className="col-md-6">
                            <p className="lead">Developers <br/><small><a href="https://ph.linkedin.com/pub/dominic-tuazon/88/7b3/261">Dominic Tuazon<br/></a><a href="https://ph.linkedin.com/in/louismaycol">Louis Michael Concepcion<br/></a><a href="https://www.linkedin.com/in/imaness">Emmanuel Soriano</a></small></p>
                        </div>
                        <div className="col-md-6">
                            <p className="lead">Designer<br/><small><a href="https://ph.linkedin.com/pub/kyle-abughanem/99/155/2b4">Kyle Abughanem<small></small></a>
                                </small>
                            </p>
                            <p className="lead">Marketing<br/><small><a href="https://ph.linkedin.com/pub/michael-gutierrez/88/b53/271">Mic Gutierrez<small></small></a>
                                </small>
                            </p>
                        </div>
                    </div>
                    <div className="well well-sm">
                        <p style={{fontSize: "smaller"}}>Data Sources</p>
                        <div style={{fontSize: "smaller"}}>
                            <ul>
                                <li><a href="http://122.54.214.222/population">http://122.54.214.222/population</a></li>
                                <li> <a href="http://nababaha.com/marikina_valley_fault.htm">http://nababaha.com</a></li>
                                <li><a href="http://www.gmanetwork.com/news/story/489334/scitech/science/list-barangays-in-metro-manila-nearby-provinces-near-earthquake-fault">http://www.gmanetwork.com</a></li>
                                <li><a href="http://www.abs-cbnnews.com/nation/05/22/15/schools-near-west-valley-fault-need-go">http://www.abs-cbnnews.com/</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>      
      <div className="modal fade" id="contact-dialog" tabIndex="-1" role="dialog" aria-labelledby="contact" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-body"><button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span>&times;</button>
                    <h1></h1>
                    <p className="lead" style={{marginBottom: "0"}}>Think you have the next great app or website idea? We can develop it for you! Contact us at:</p>
                    <p><a href="mailto:ideas@instigators.io">ideas@instigators.io</a></p>
                    <p className="lead" style={{marginBottom: "0"}}>Visit our site at:</p>
                    <p><a href="http://www.instigators.io">Soon: www.instigators.io</a></p>
                </div>
            </div>
        </div>
      </div>
      <div className="modal fade" id="legend-modal">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header"><button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      <h4 className="modal-title">Map Legend</h4>
                  </div>
                  <div className="modal-body">
                      <div className="row">
                          <div className="col-sm-2">
                              <div className="line"></div>
                              <div className="line-text">Old</div>
                          </div>
                          <div className="col-sm-2">
                              <div className="line"></div>
                              <div className="line-text">Certain</div>
                          </div>
                          <div className="col-sm-2">
                              <div className="line"></div>
                              <div className="line-text">Approximate</div>
                          </div>
                          <div className="col-sm-2">
                              <div className="line"></div>
                              <div className="line-text">Fissure</div>
                          </div>
                          <div className="col-sm-4" style={{paddingTop: "7px"}} >
                              <div className="circle"></div>
                              <div className="line-text" style={{marginTop: "4px"}}>Population Density</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>       */}
    </>
  );
};

export default Body;