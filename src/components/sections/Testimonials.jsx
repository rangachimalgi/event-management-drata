import React from 'react';
import { useSectionAnimation } from '../../hooks/useSectionAnimation';

const Testimonials = () => {
  const sectionRef = useSectionAnimation({
    staggerDelay: 0.2,
    animateParagraphs: true,
  });

  const testimonials = [
    {
      name: 'Drake Holloway',
      role: 'CTO, Infinitum',
      avatar: 'avatar.png',
      text: '"When I first walked into the clinic, I was anxious and unsure about my condition. But from the moment I was greeted at the reception to my final check-up, every team member treated me with kindness."'
    },
    {
      name: 'Kate Leeman',
      role: 'CTO, Infinitum',
      avatar: 'avatar-2.png',
      text: '"When I first walked into the clinic, I was anxious and unsure about my condition. But from the moment I was greeted at the reception to my final check-up, every team member treated me with kindness."'
    },
    {
      name: 'Natalie Kingston',
      role: 'CTO, Infinitum',
      avatar: 'avatar-3.png',
      text: '"When I first walked into the clinic, I was anxious and unsure about my condition. But from the moment I was greeted at the reception to my final check-up, every team member treated me with kindness."'
    }
  ];

  return (
    <div ref={sectionRef} className="tp-testimonial-area pb-130 pt-160 p-relative z-index-1">
      <img className="tp-testimonial-md-map p-absolute" src="/assets/img/testimonial/md/map.png" alt="" />
      <div className="container">
        <div className="col-12">
          <div className="swiper tp-testimonial-md-slide-active">
            <div className="swiper-wrapper">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="swiper-slide">
                  <div className="tp-testimonial-md-item text-center">
                    <span className="mb-40 d-inline-block">
                      <svg width="80" height="62" viewBox="0 0 80 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.4785 37.4167C17.4546 43.5365 25.1236 50.0735 31.1193 50.2126C31.5376 50.2126 31.9559 50.3516 32.2348 50.6298C32.5137 50.7689 32.7926 50.908 32.932 51.3252C35.0235 55.2196 33.9081 58.2795 30.4221 60.7831C26.3785 63.7039 19.9644 60.7831 16.7574 58.1404C8.67008 51.4643 0.443335 39.9205 0.861644 28.9325C-0.532719 21.5607 -0.253846 13.633 1.8377 7.09602C3.23206 2.92345 7.27571 0.837162 11.4588 0.55899C15.6419 0.280594 24.2869 -0.970947 28.0517 1.53237C31.8165 4.03614 32.0954 8.90413 32.5137 13.0765C32.932 17.6663 34.1869 26.2898 30.2827 29.9061C26.3785 33.3832 15.2236 29.6279 16.4785 37.4167ZM62.4925 37.4167C63.4686 43.5365 71.1373 50.0735 77.1333 50.2126C77.5516 50.2126 77.9699 50.3516 78.2488 50.6298C78.5279 50.7689 78.8065 50.908 78.9462 51.3252C81.0378 55.2196 79.9223 58.2795 76.4364 60.7831C72.3927 63.7039 65.9786 60.7831 62.7714 58.1404C54.6841 51.4643 46.4573 39.9202 46.8756 28.9325C45.4813 21.5607 45.7601 13.633 47.8515 7.09602C49.2458 2.92345 53.2895 0.837162 57.4728 0.55899C61.6559 0.280594 70.3009 -0.970947 74.0657 1.53237C77.8303 4.03614 78.1094 8.90413 78.5277 13.0765C78.946 17.6663 80.2009 26.2898 76.2967 29.9061C72.3925 33.3832 61.0981 29.6279 62.4925 37.4167Z" fill="#fff" />
                      </svg>
                    </span>
                    <h5 className="tp-ff-familjen fw-600 fs-52 fs-xl-45 fs-lg-40 fs-md-30 lh-120-per ls-m-4 tp-text-common-white mb-45">
                      {testimonial.text}
                    </h5>
                    <div className="tp-testimonial-md-author">
                      <img className="rounded-circle mb-20" data-width="80" src={`/assets/img/testimonial/it/${testimonial.avatar}`} alt="" />
                      <h5 className="tp-ff-inter fw-600 fs-24 tp-text-common-white mb-5">{testimonial.name}</h5>
                      <span className="tp-ff-inter fs-18 tp-text-common-white">{testimonial.role}</span>
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

export default Testimonials;

