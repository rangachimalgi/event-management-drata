import React, { useState, useEffect } from 'react';

const SearchForm = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="tp-search-body-overlay" onClick={onClose}></div>
      <div className="tp-search-form-toggle tp-search-dark active">
        <div className="container">
          <div className="row mb-70">
            <div className="col-lg-12">
              <div className="tp-search-top d-flex justify-content-between align-items-center">
                <div className="cm-search-logo">
                  <a href="/"><img data-width="150" src="/assets/img/logo/logo-white-2.png" alt="logo"></img></a>
                </div>
                <button className="tp-search-close" onClick={onClose}>
                  <i className="fa-light fa-xmark"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="tp-search-form">
                <form action="#">
                  <div className="tp-search-form-input">
                    <input type="text" placeholder="What are you looking foor?" required></input>
                    <span className="tp-search-focus-border"></span>
                    <button className="tp-search-form-icon" type="submit">
                      <i className="fa-sharp fa-regular fa-magnifying-glass"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchForm;

