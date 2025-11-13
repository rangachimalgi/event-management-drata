import React from 'react';
import { useSectionAnimation } from '../../hooks/useSectionAnimation';

const Counter = () => {
  const sectionRef = useSectionAnimation({
    staggerDelay: 0.1,
    animateParagraphs: false,
  });

  const counters = [
    { icon: 'icon.png', value: '34', suffix: 'K', label: 'Operation Complete' },
    { icon: 'icon-2.png', value: '16', suffix: 'K', label: 'Country Hospital' },
    { icon: 'icon-3.png', value: '12', suffix: '+', label: 'Year of Experience' },
    { icon: 'icon-4.png', value: '98', suffix: '%', label: 'Happy Customer' }
  ];

  return (
    <div ref={sectionRef} className="tp-counter-area pb-110">
      <div className="container">
        <div className="row bounce_animation">
          {counters.map((counter, index) => (
            <div key={index} className="col-xl-3 col-lg-6 col-md-6 col-sm-6 bounce__anim">
              <div className={`tp-counter-cst-item tp-counter-md-item tpshake-wrap mb-40 ${index === 1 ? 'ml-40' : index === 2 ? 'ml-80' : ''}`}>
                <div className="tp-counter-cst-item-inner d-flex justify-content-xxl-end">
                  <span className="tp-counter-2-icon mt-10 d-inline-block mr-25">
                    <img className="tpshake" src={`/assets/img/counter/${counter.icon}`} alt="" />
                  </span>
                  <div>
                    <h2 className="tp-ff-familjen tp-text-common-white fw-600 fs-72 text-uppercase mb-0">
                      <span data-purecounter-duration="1" data-purecounter-end={counter.value} className="purecounter">0</span>{counter.suffix}
                    </h2>
                    <span className="fs-500 fs-18 fs-xl-16 tp-ff-dm tp-text-common-white opacity-8">{counter.label}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;

