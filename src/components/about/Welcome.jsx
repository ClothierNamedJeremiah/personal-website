import React from 'react';

const Welcome = () => {
  return (
    <div className="welcome-wrapper">
      <div className="welcome-container">
        <span>Hi, my name is</span>
        <h1 className="title">Jeremiah Clothier</h1>
        <h2 className="subtitle">I build things on the web for fun.</h2>
        <p className="bio">
          I am a software engineer with a constant desire to figure out why
          and how things work the way they do. I enjoy building websites and
          teaching others along the way.
        </p>
        <div className="welcome-actions">
          <a
            href="mailto:clothiernamedjeremiah@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Get in Touch
          </a>
          <a href="#">
            View Resume
          </a>
        </div>
      </div>
    </div>
  )
}


export default Welcome
