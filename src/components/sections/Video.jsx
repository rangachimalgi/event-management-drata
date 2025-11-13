import React from 'react';
import { useSectionAnimation } from '../../hooks/useSectionAnimation';

const Video = () => {
  const sectionRef = useSectionAnimation({
    staggerDelay: 0.2,
    animateParagraphs: false,
  });

  return (
    <div ref={sectionRef} className="tp-video-area tp-video-md-spacing scale-up-img p-relative">
      <img className="tp-video-md-bg img-cover scale-up" data-speed=".8" src="/assets/img/video/md/bg.jpg" alt="" />
      <div className="tp-video-main tp-video-md-wrap">
        <a className="tp-video-md-btn popup-video video-animetion" href="https://www.youtube.com/watch?v=go7QYaQR494">
          <span>
            <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.5 14.6699C34.8333 16.5944 34.8333 21.4056 31.5 23.3301L7.5 37.1865C4.16667 39.111 1.90427e-06 36.7054 2.07252e-06 32.8564L3.28388e-06 5.14359C3.45213e-06 1.29459 4.16667 -1.11104 7.5 0.813466L31.5 14.6699Z" fill="#F3F1F2" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Video;

