import React from 'react';

const Loader = ({ isHiding }) => {
  return (
    <div className={`loader-wrap ${isHiding ? 'loader-wrap-hidden' : ''}`}>
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>
      <div className="loader-wrap-heading">
        <div className="load-text">
          <span>D</span>
          <span>R</span>
          <span>A</span>
          <span>T</span>
          <span>A</span>
          <span> </span>
          <span>C</span>
          <span>R</span>
          <span>E</span>
          <span>A</span>
          <span>T</span>
          <span>I</span>
          <span>O</span>
          <span>N</span>
          <span>S</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;

