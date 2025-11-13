import React from 'react';
import { useSectionAnimation } from '../../hooks/useSectionAnimation';

const About = () => {
  const sectionRef = useSectionAnimation({
    staggerDelay: 0.2,
    animateParagraphs: true,
  });

  return (
    <div ref={sectionRef} className="tp-about-area p-relative z-index-1 pb-160 tp-item-anime-area-md">
      <div className="tp-about-md-shape d-none d-lg-block">
        <img 
          className="has_fade_anim" 
          data-fade-from="left" 
          data-duration="2" 
          data-delay="0.3"
          data-fade-offset="80" 
          data-ease="bounce" 
          src="/assets/img/about/md/shape.png" 
          alt=""
        />
      </div>
      <div className="tp-about-md-shape-2">
        <img 
          className="has_fade_anim" 
          data-fade-from="right" 
          data-duration="2" 
          data-delay="0.3"
          data-fade-offset="80" 
          data-ease="bounce" 
          src="/assets/img/about/md/shape-2.png" 
          alt=""
        />
      </div>
      <h2 className="tp-about-md-bigtext fw-600 tp-ff-familjen ls-m-4 tp-item-anime-md marque d-none d-lg-block">Medical</h2>
      <div className="container">
        <div className="col-lg-12">
          <div className="tp-about-md-title-wrap mb-65">
            <h3 className="text-anim tp-about-md-title tp-ff-familjen fw-600 ls-m-4 tp-text-common-white lh-1">Our about us</h3>
          </div>
        </div>
        <div className="offset-lg-3 col-lg-9">
          <div className="tp-about-md-content ml-90 mr-85">
            <div className="tp_fade_anim" data-delay=".3">
              <p className="tp-ff-dm fs-18 lh-150-per ls-m-3 tp-text-grey-2 mb-30">
                At our medical center, we are committed to delivering high-quality, compassionate healthcare to<br />
                every patient we serve. With a team of experienced doctors, advanced technology, and a patient-first
                approach, we ensure that your health is always in trusted hands. From <span className="fw-500 tp-text-common-white">Routine check-ups to specialized</span>
                treatments, we offer personalized care designed to meet your unique needs.
              </p>
            </div>
            <div className="tp_fade_anim" data-delay=".5">
              <p className="tp-ff-dm fs-18 lh-150-per ls-m-3 tp-text-grey-2 mb-75">
                Your wellness is our mission — and every step we take is focused on helping you live a healthier, happier
                life. With a dedicated team of highly qualified doctors, nurses, and healthcare professionals, we combine
                modern medical technology with a <span className="fw-500 tp-text-common-white">Compassionate approach to patient care.</span> Every member of our
                staff is focused on listening to your concerns, understanding your needs,
              </p>
            </div>
            <div className="tp-about-md-expreance">
              <div className="row">
                <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-5">
                  <div className="tp-about-md-expreance-count tp_fade_anim" data-delay=".7">
                    <span>
                      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.08" cx="100" cy="100" r="100" fill="#0752C5" />
                      </svg>
                    </span>
                    <h2 className="tp-ff-familjen ls-m-4 tp-text-common-white">
                      <span data-purecounter-duration="1" data-purecounter-end="40" className="purecounter">0</span>
                    </h2>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6">
                  <div className="tp-about-md-expreance-content tp_fade_anim" data-delay=".9">
                    <h4 className="tp-ff-familjen fs-32 lh-110-per ls-m-4 tp-text-common-white mb-20">
                      Years Working<br /> experience
                    </h4>
                    <p className="tp-ff-dm fs-18 lh-160-per ls-m-3 tp-text-grey-2 mb-30">
                      We are committed to delivering high-quality,
                      compassionate healthcare to every patient
                      we serve. of experienced doctors.
                    </p>
                    <a href="#about" className="tp-btn-md tp-bg-theme-1 tp-left-right p-relative hover-text-white d-inline-block tp-text-grey-5 lh-1 fs-16 fw-700 tp-ff-dm">
                      <span className="mr10 td-text d-inline-block mr-5">Read More</span>
                      <span className="tp-arrow-angle">
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 11L12 1M12 1H3.44444M12 1V8.77778" stroke="#F3F1F2" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M1 11L12 1M12 1H3.44444M12 1V8.77778" stroke="#F3F1F2" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

