import React from 'react';
import { useSectionAnimation } from '../../hooks/useSectionAnimation';

const Features = () => {
  const sectionRef = useSectionAnimation({
    staggerDelay: 0.15,
    animateParagraphs: true,
  });

  const features = [
    {
      icon: 'icon.png',
      title: 'Lab Test Booking',
      description: 'Combine advanced medical expertise genuine compassion to ensure you receive.',
      bgColor: '#f1eeff'
    },
    {
      icon: 'icon-2.png',
      title: 'Insurance Support',
      description: 'Combine advanced medical expertise genuine compassion to ensure you receive.',
      bgColor: '#ebffe4'
    },
    {
      icon: 'icon-3.png',
      title: 'Health Blog & Tips',
      description: 'Combine advanced medical expertise genuine compassion to ensure you receive.',
      bgColor: '#fff7f3'
    },
    {
      icon: 'icon-4.png',
      title: 'Insurance Support',
      description: 'Combine advanced medical expertise genuine compassion to ensure you receive.',
      bgColor: '#e7f3ff'
    }
  ];

  return (
    <div ref={sectionRef} className="tp-feature-area pb-80">
      <div className="container-fluid container-1824">
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
              <div 
                className="tp-feature-md-item tpshake-wrap d-flex flex-column mb-30 tp_fade_anim tp-feature-md-item-light" 
                data-delay={`.${3 + index * 2}`}
                data-duration="1"
                data-fade-from="bottom"
                data-ease="bounce"
                style={{ backgroundColor: feature.bgColor }}
              >
                <div className="tp-feature-md-icon mb-30">
                  <img className="tpshake" src={`/assets/img/feature/${feature.icon}`} alt="" />
                </div>
                <div className="tp-feature-md-content flex-grow-1 d-flex flex-column">
                  <h4 className="tp-ff-familjen fw-600 fs-24 lh-140-per ls-m-4 tp-text-common-black-5 mb-20">{feature.title}</h4>
                  <p className="tp-ff-dm fs-18 lh-160-per ls-m-3 tp-text-common-black-6 opacity-8 mb-30 flex-grow-1">
                    {feature.description}
                  </p>
                  <a href="#service" className="tp-feature-md-btn-light d-inline-flex align-items-center justify-content-center lh-1 fs-16 fw-700 tp-ff-dm">
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 13L14 1M14 1H3.88889M14 1V10.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

