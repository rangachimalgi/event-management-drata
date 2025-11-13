import React, { useState } from 'react';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with middle item active

  const heroItems = [
    { 
      img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop', 
      title: 'Orthopaedic', 
      id: 0 
    },
    { 
      img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop', 
      title: 'Orthopaedic', 
      id: 1 
    },
    { 
      img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop', 
      title: 'Orthopaedic', 
      id: 2 
    }
  ];

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="tp-hero-area pre-header tp-hero-md-spacing bg-position" data-background="/assets/img/hero/md/bg-black.jpg">
      <div className="container-fluid container-1824 containers">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="tp-hero-md-content p-relative mb-40">
              <span className="tp-ff-dm fw-500 fs-20 fs-xs-17 ls-m-3 tp-text-common-white mb-20 d-inline-block">Your Health, Our Priority</span>
              <h2 className="tp-hero-md-title tp-ff-familjen fs-92 fs-lg-100 fs-md-80 fs-sm-70 fs-xs-50 tp-text-common-white lh-1 ls-m-3 mb-25">
                Healing  hands caring hearts.
              </h2>
              <p className="tp-hero-md-para tp-ff-dm fs-24 fs-xl-22 lh-140-per ls-m-3 tp-text-common-white opacity-8 mb-45">
                We combine advanced medical expertise with genuine<br /> compassion to ensure you receive.
              </p>
              <div className="tp-hero-md-btn d-flex align-items-center">
                <a href="#contact" className="tp-btn-md tp-bg-theme-1 tp-left-right p-relative hover-text-white d-inline-block tp-text-grey-5 lh-1 fs-16 fw-700 tp-ff-dm">
                  <span className="mr10 td-text d-inline-block mr-5">Contact Us</span>
                  <span className="tp-arrow-angle">
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 11L12 1M12 1H3.44444M12 1V8.77778" stroke="#F3F1F2" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M1 11L12 1M12 1H3.44444M12 1V8.77778" stroke="#F3F1F2" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </a>
                <div className="tp-hero-video d-flex align-items-center">
                  <a className="tp-hero-video-btn tp-hero-md-video-btn popup-video mr-15" href="https://www.youtube.com/watch?v=go7QYaQR494">
                    <span>
                      <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 9L-8.15666e-07 17.6603L-5.85621e-08 0.339745L15 9Z" fill="currentColor" />
                      </svg>
                    </span>
                  </a>
                  <p className="tp-hero-md-video-text tp-ff-dm lh-110-per mb-0 fw-600 fs-16 tp-text-common-white opacity-8">Watch Our Video</p>
                </div>
              </div>
              <img className="tp-hero-md-shape tp-live-anim-spin" src="/assets/img/hero/md/virus.png" alt="" />
            </div>
          </div>
          <div className="col-xl-6 mb-40">
            <div 
              className="tp-hero-md-row-custom"
              onMouseLeave={() => setActiveIndex(1)}
            >
              {heroItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`tp-hero-md-col-custom ${activeIndex === index ? 'active' : ''}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                >
                  <div className="tp-hero-md-panel-item p-relative">
                    <div className="tp-hero-md-panel-thumb">
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div className="tp-hero-md-panel-content">
                      <h4 className="tp-hero-md-panel-title mb-15">
                        <a href="#team" className="underline-black">{item.title} <br />Surgeon</a>
                      </h4>
                      <div className="tp-hero-md-panel-meta">
                        <span className="count">15+</span>
                        <span className="doctor">Doctor</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

