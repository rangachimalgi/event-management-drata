import React from 'react';
import { useSectionAnimation } from '../../hooks/useSectionAnimation';

const Services = () => {
  const sectionRef = useSectionAnimation({
    staggerDelay: 0.15,
    animateParagraphs: true,
  });

  const services = [
    {
      title: "Premium wedding packages",
      description: "We offer premium wedding packages that are tailored to your unique needs."
    },
    {
      title: "Premium engagement packages",
      description: "We offer premium engagement packages that are tailored to your unique needs."
    },
    {
      title: "Premium house warming packages",
      description: "We offer premium house warming packages that are tailored to your unique needs."
    },
    {
      title: "Premium baby shower packages",
      description: "We offer premium baby shower packages that are tailored to your unique needs."
    }
  ];

  return (
    <div ref={sectionRef} className="tp-service-area pb-110">
      <div className="container-fluid container-1824">
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-8">
            <div className="tp-service-md-title-wrap mb-40">
              <span className="tp-text-revel-anim fix tp-section-md-subtitle tp-ff-dm fw-600 fs-16 ls-m-3 tp-text-common-white d-inline-block">Premium Services</span>
              <h2 className="tp-text-revel-anim fix tp-section-md-title tp-ff-familjen fs-62 lh-1 ls-m-3 tp-text-common-white mb-20">Services that go beyond expectations</h2>
              <p className="tp-ff-dm fs-20 lh-150-per ls-m-3 tp-text-common-white opacity-8 mb-50">
                We offer premium services that are tailored to your unique needs and budget.
              </p>
              <div className="tp_fade_anim" data-delay=".9" data-fade-from="bottom" data-ease="bounce">
                <a href="#services" className="tp-btn-md tp-btn-md-border tp-left-right p-relative hover-text-white d-inline-block tp-text-common-white lh-1 fs-16 fw-800 tp-ff-dm">
                  <span className="td-text d-inline-block mr-5">Premium Packages</span>
                  <span className="tp-arrow-angle">
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 11L12 1M12 1H3.44444M12 1V8.77778" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M1 11L12 1M12 1H3.44444M12 1V8.77778" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="tp-service-md-item-wrap ml-50">
              <div className="row gx-30">
                {services.map((service, index) => (
                  <div key={index} className="col-lg-6 col-md-6 tp_fade_anim" data-delay={`.${3 + index * 2}`} data-fade-from="bottom">
                    <div className="tp-service-md-item tp-bg-grey-8 tpshake-wrap mb-50">
                      <span className="tp-service-md-icon tpshake d-inline-block mb-45">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M35.0962 28C29.5202 28 25 32.1973 25 37.375V63.75C25 67.2018 28.0135 70 31.7308 70H60.2692C63.9865 70 67 67.4518 67 64V43.375C67 40.6826 64.6495 38.5 61.75 38.5C58.8505 38.5 56.5 36.3174 56.5 33.625V33.25C56.5 30.3505 53.9687 28 50.8462 28H35.0962Z" fill="#F3F1F2" />
                        </svg>
                      </span>
                      <h3 className="tp-service-md-title tp-ff-familjen fw-500 fs-42 ls-m-4 tp-text-common-white mb-15">
                        <a href="#service-details" className="underline-black">{service.title}</a>
                      </h3>
                      <p className="tp-service-md-text tp-ff-dm fs-18 lh-160-per ls-m-3 tp-text-common-white opacity-8 mb-35">
                        {service.description}
                      </p>
                      <a href="#service-details" className="tp-service-md-btn text-uppercase tp-left-right hover-text-white d-inline-block tp-text-common-white lh-1 fs-16 fw-800 tp-ff-dm">
                        <span className="td-text d-inline-block mr-5">Read More</span>
                        <span className="tp-arrow-angle">
                          <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11L12 1M12 1H3.44444M12 1V8.77778" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M1 11L12 1M12 1H3.44444M12 1V8.77778" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

