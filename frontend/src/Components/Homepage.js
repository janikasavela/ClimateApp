import React from 'react';
import mountain from '../assets/images/mountain.webp';
import visual from '../assets/images/visual.webp';
import emission from '../assets/images/emission.webp';
import { Link } from 'react-router-dom';

export default function Homepage({setPathName}) {

 return(

  <React.Fragment>

  <div className="picture">
     <img src={mountain} alt="mountains" />
     </div>
 
  <h2>Information about climate change</h2>

  <div className="card-wrapper">
    <div className="card" id="about">
  <p className="about">
    On Climate App various charts are available that tells data about the
    different research results of global climate change. Below you can see
    the available visualization views. You can also register and custom your
    own visualization views to share with your friends!
  </p></div>
  </div>

  <div className="card-wrapper">
        <div className="card">
          <div>
            <div className="title">
              <p>View 1</p>
            </div>
            <img
              className="visual"
              src={visual}
              alt="visualization1"
            />
          </div>
          <hr />
          <p>Temperature information and CO2 concentrations</p>
          <Link onClick={() => setPathName("/v1")} to="/v1">Open View</Link>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div>
            <div className="title">
              <p>View 2</p>
            </div>
            <img
              className="visual"
              src={emission}
              alt="visualization2"
            />
          </div>
          <hr />
          <p>Emission sources</p>
          <Link onClick={() => setPathName("/v2")} to="/v2">Open View</Link>
        </div>
      </div>

  </React.Fragment>

 );

};