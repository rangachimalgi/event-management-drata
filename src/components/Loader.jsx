import React from 'react';

const Loader = ({ isHiding }) => {
  return (
    <div className={`loader-wrap ${isHiding ? 'loader-wrap-hidden' : ''}`}>
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>
      <div className="loader-wrap-heading">
        <div className="load-text">
          <span>A</span>
          <span>L</span>
          <span>E</span>
          <span>R</span>
          <span>i</span>
          <span>C</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;

