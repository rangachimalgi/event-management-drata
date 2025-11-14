import React from 'react';
import { useSectionAnimation } from '../../hooks/useSectionAnimation';

const Portfolio = () => {
  const sectionRef = useSectionAnimation({
    staggerDelay: 0.2,
    animateParagraphs: false,
  });

  const portfolioItems = [
    { 
      img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop', 
      tag: 'Wedding', 
      title: 'Elegant Wedding Celebration' 
    },
    { 
      img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop', 
      tag: 'Engagement', 
      title: 'Romantic Engagement Session' 
    },
    { 
      img: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop', 
      tag: 'Photography', 
      title: 'Professional Portrait Photography' 
    },
  
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
                    <img src={item.img} alt={item.title} />
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

