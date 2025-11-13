import React from 'react';
import { useSectionAnimation } from '../../hooks/useSectionAnimation';

const Portfolio = () => {
  const sectionRef = useSectionAnimation({
    staggerDelay: 0.2,
    animateParagraphs: false,
  });

  const portfolioItems = [
    { img: 'thumb.jpg', tag: 'Barbiturates', title: 'Epidemiological Insights' },
    { img: 'thumb-2.jpg', tag: 'Barbiturates', title: 'Patient-Centric Design' },
    { img: 'thumb-3.jpg', tag: 'Barbiturates', title: 'Immunotherapy Research' }
  ];

  return (
    <div ref={sectionRef} id="portfolio" className="tp-portfolio-area tp-portfolio-md-border fix">
      <div className="container-fluid p-0">
        <div className="tp-portfolio-md-wrapper">
          <div className="tp-portfolio-md-inner-wrap">
            {portfolioItems.map((item, index) => (
              <div key={index} className="tp-portfolio-md-item">
                <div className="tp-portfolio-md-thumb not-hide-cursor mb-40" data-cursor="View<br>Demo">
                  <a className="cursor-hide" href="#portfolio-details">
                    <img src={`/assets/img/portfolio/md/${item.img}`} alt="" />
                  </a>
                </div>
                <div className="tp-portfolio-md-content">
                  <span className="tp-portfolio-md-tag tp-round-36 tp-ff-dm fw-600 ls-m-2 tp-text-common-white mb-10 d-inline-block">{item.tag}</span>
                  <h4 className="tp-portfolio-md-title tp-ff-familjen fs-32 lh-130-per tp-text-common-white">
                    <a href="#portfolio-details" className="underline-black">{item.title}</a>
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

