import React from 'react';

const Welcome = () => {
  return (
    <div className="welcome-wrapper">
      <div className="welcome-container">
        <span className="fs-normal fc-yellow">Hi, my name is</span>
        <h1 className="fs-x-large title">Jeremiah Clothier</h1>
        <h2 className="fs-large subtitle">I build things on the web for fun.</h2>
        <p className="fs-normal fc-bright-purple bio">
          I am a software engineer with a constant desire to figure out why
          and how things work the way they do. I enjoy building websites and
          teaching others along the way.
        </p>
        <div className="welcome-links">
          <a
            className="btn-link-base btn-link-primary"
            href="mailto:clothiernamedjeremiah@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}


export default Welcome
