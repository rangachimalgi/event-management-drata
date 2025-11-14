import React from 'react';

const Header = ({ onSearchClick, onMenuClick }) => {
  return (
    <header>
      <div id="header-sticky" className="tp-header-area pre-header tp-header-md-wrap sticky-black-bg tp-header-blur header-transparent">
        <div className="tp-header-md-top tp-bg-common-black-5 d-none d-lg-block">
          <div className="container-fluid container-1824">
            <div className="row">
              <div className="col-lg-3">
                <div className="tp-header-md-social">
                  <ul>
                    <li>
                      <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.60319 6.77491L15.4315 0H14.0504L8.98966 5.88256L4.94769 0H0.285767L6.39801 8.89547L0.285767 16H1.66696L7.01119 9.78782L11.2798 16H15.9417L9.60285 6.77491H9.60319ZM7.71145 8.97384L7.09216 8.08805L2.16463 1.03974H4.28606L8.26263 6.72795L8.88193 7.61374L14.051 15.0075H11.9296L7.71145 8.97418V8.97384Z" fill="currentColor" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="tp-header-md-contact">
                  <ul>
                    <li>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3 14C11.9111 14 10.5389 13.6972 9.18333 13.0917C7.82778 12.4861 6.59444 11.6278 5.48333 10.5167C4.37222 9.40556 3.51389 8.17222 2.90833 6.81667C2.30278 5.46111 2 4.08889 2 2.7C2 2.5 2.06667 2.33333 2.2 2.2C2.33333 2.06667 2.5 2 2.7 2H5.4C5.55556 2 5.69444 2.05278 5.81667 2.15833C5.93889 2.26389 6.01111 2.38889 6.03333 2.53333L6.46667 4.86667C6.48889 5.04444 6.48333 5.19444 6.45 5.31667C6.41667 5.43889 6.35556 5.54444 6.26667 5.63333L4.65 7.26667C4.87222 7.67778 5.13611 8.075 5.44167 8.45833C5.74722 8.84167 6.08333 9.21111 6.45 9.56667C6.79444 9.91111 7.15556 10.2306 7.53333 10.525C7.91111 10.8194 8.31111 11.0889 8.73333 11.3333L10.3 9.76667C10.4 9.66667 10.5306 9.59167 10.6917 9.54167C10.8528 9.49167 11.0111 9.47778 11.1667 9.5L13.4667 9.96667C13.6222 10.0111 13.75 10.0917 13.85 10.2083C13.95 10.325 14 10.4556 14 10.6V13.3C14 13.5 13.9333 13.6667 13.8 13.8C13.6667 13.9333 13.5 14 13.3 14ZM4.01667 6L5.11667 4.9L4.83333 3.33333H3.35C3.40556 3.78889 3.48333 4.23889 3.58333 4.68333C3.68333 5.12778 3.82778 5.56667 4.01667 6ZM9.98333 11.9667C10.4167 12.1556 10.8583 12.3056 11.3083 12.4167C11.7583 12.5278 12.2111 12.6 12.6667 12.6333V11.1667L11.1 10.85L9.98333 11.9667Z" fill="currentColor" />
                      </svg>
                      Call us: <a href="mailto:info@example.com">info@example.com</a>
                    </li>
                    <li>
                      <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.71249 6.71613L1 4.44814C4.42407 2.73796 8.14419 1.57183 12 1C11.3711 4.50526 10.0885 7.88719 8.2076 11L5.71249 6.71613ZM5.71249 6.71613L8.75778 3.94758" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Send email: <a href="mailto:info@example.com">info@example.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-header-md-main">
          <div className="container-fluid container-1824">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-6">
                <div className="tp-header-logo">
                  <a href="/"><img data-width="150" src="/assets/img/logo/drataLogo.png" alt="Drata Creations"></img></a>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-7 d-none d-xl-block">
                <div className="tp-main-menu tp-main-menu-ai tp-main-menu-md tp-header-dropdown dropdown-black-bg">
                  <nav className="tp-mobile-menu-active">
                    <ul>
                      <li><a href="#home">Home</a></li>
                      <li><a href="#blog">Events</a></li>
                      <li><a href="#portfolio">Housewarming</a></li>
                      <li><a href="#about">About</a></li>
                      <li><a href="#contact">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-3 col-6">
                <div className="tp-header-right d-flex align-items-center justify-content-end">
                  <div className="tp-header-search">
                    <button className="tp-header-search-btn tp-header-md-search-btn tp-search-click" onClick={onSearchClick}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.76923 1.23077C3.71042 1.23077 1.23077 3.71042 1.23077 6.76923C1.23077 9.82804 3.71042 12.3077 6.76923 12.3077C8.29881 12.3077 9.68258 11.6885 10.6855 10.6855C11.6885 9.68258 12.3077 8.29881 12.3077 6.76923C12.3077 3.71042 9.82804 1.23077 6.76923 1.23077ZM0 6.76923C0 3.03069 3.03069 0 6.76923 0C10.5078 0 13.5385 3.03069 13.5385 6.76923C13.5385 8.41668 12.9493 9.92743 11.9712 11.1009L15.8198 14.9495C16.0601 15.1898 16.0601 15.5794 15.8198 15.8198C15.5794 16.0601 15.1898 16.0601 14.9495 15.8198L11.1009 11.9712C9.92743 12.9493 8.41668 13.5385 6.76923 13.5385C3.03069 13.5385 0 10.5078 0 6.76923Z" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                  <div className="tp-header-btn d-none d-sm-inline-block ml-10">
                    <a href="#contact" className="tp-btn-md tp-btn-md-header tp-bg-theme-1 tp-left-right p-relative hover-text-white d-inline-block text-uppercase tp-text-grey-5 lh-1 fs-15 fw-800 tp-ff-dm">
                      <span className="mr10 td-text d-inline-block mr-5">Enquire Now</span>
                      <span className="tp-arrow-angle">
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 11L12 1M12 1H3.44444M12 1V8.77778" stroke="#F3F1F2" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M1 11L12 1M12 1H3.44444M12 1V8.77778" stroke="#F3F1F2" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <button className="tp-menu-bar tp-header-sidebar-btn ml-20 d-xl-none" onClick={onMenuClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

