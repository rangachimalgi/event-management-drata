import React from 'react';
import { useSectionAnimation } from '../../hooks/useSectionAnimation';

const TextSlider = () => {
  const sectionRef = useSectionAnimation({
    staggerDelay: 0.15,
    animateParagraphs: false,
  });

  return (
    <div ref={sectionRef} className="tp-text-md-slider-area pb-95">
      <div className="swiper-container tp-text-md-slider-active">
        <div className="swiper-wrapper slide-transtion">
          {[1, 2, 3].map((item) => (
            <div key={item} className="swiper-slide">
              <div className="tp-text-md-top-text">
                <h2 className="tp-text-md-title tp-ff-familjen ls-m-3 tp-text-common-white mb-0">
                  Health Questions Find Your Clarity Here
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextSlider;

