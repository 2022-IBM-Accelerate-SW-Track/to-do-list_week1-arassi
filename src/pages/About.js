import React, { Component } from 'react';

import "./About.css";
import profile from "../assets/profile.jpeg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profile}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Anthony Rassi</div>
            <div className="brief_description">
              I'm a second-year Computer Engineering and Computer Science student.
            </div>
          </div>
        </div>
      </div>
    )
  }
}