import React, { useState } from 'react';
import { useSectionAnimation } from '../../hooks/useSectionAnimation';

const FAQ = () => {
  const sectionRef = useSectionAnimation({
    staggerDelay: 0.15,
    animateParagraphs: true,
  });

  const [openItems, setOpenItems] = useState(['order_one']); // First item open by default

  const faqs = [
    {
      id: 'order_one',
      question: 'How do I book an event?',
      answer: 'To book an event, please contact us at +91 9999999999 or email us at info@drata.com.'
    },
    {
      id: 'order_two',
      question: 'How do i get a quote?',
      answer: 'To get a quote, please contact us at +91 9999999999 or email us at info@drata.com.'
    },
    {
      id: 'order_three',
      question: 'How do i book house warming?',
      answer: 'Customize your house warming package by selecting the services you need and we will handle the rest.'
    }
  ];

  const toggleItem = (id) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  return (
    <div ref={sectionRef} className="tp-faq-area pt-145 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-30">
            <div className="tp-faq-md-title-wrap mb-30">
              <span className="tp-text-revel-anim fix tp-section-md-subtitle tp-ff-dm fw-600 fs-16 ls-m-3 tp-text-common-white d-inline-block mb-10">Clarity in Every Question</span>
              <h2 className="tp-text-revel-anim fix tp-section-md-title tp-ff-familjen fs-62 lh-1 ls-m-3 tp-text-common-white mb-20">Your event questions, clearly answered.</h2>
            </div>
            <div className="tp-faq-wrap tp-faq-cst-tab-content tp-faq-md-tab-content mb-40">
              <div className="accordion mb-60" id="general_faqaccordion">
                {faqs.map((faq, index) => {
                  const isOpen = openItems.includes(faq.id);
                  const collapseId = `order__collapse_${faq.id.split('_')[1]}`;
                  
                  return (
                    <div key={index} className="accordion-item tp_fade_anim" data-delay=".4">
                      <h2 className="accordion-header p-relative" id={faq.id}>
                        <button 
                          className={`tp-faq-btn ${isOpen ? '' : 'collapsed'}`} 
                          type="button" 
                          onClick={() => toggleItem(faq.id)}
                          aria-expanded={isOpen}
                          aria-controls={collapseId}
                        >
                          {faq.question}
                          <span className="accordion-btn"></span>
                        </button>
                      </h2>
                      <div 
                        id={collapseId} 
                        className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
                        aria-labelledby={faq.id}
                        data-bs-parent="#general_faqaccordion"
                      >
                        <div className="accordion-body tp-faq-details-para">
                          <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="tp-faq-md-btn tp_fade_anim" data-delay=".6" data-fade-from="bottom" data-ease="bounce">
              <a href="#faq" className="tp-btn-md tp-bg-theme-1 tp-left-right p-relative hover-text-white d-inline-block tp-text-grey-5 lh-1 fs-16 fw-700 tp-ff-dm">
                <span className="mr10 td-text d-inline-block mr-5">Browse FAQs</span>
                <span className="tp-arrow-angle">
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L12 1M12 1H3.44444M12 1V8.77778" stroke="#F3F1F2" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M1 11L12 1M12 1H3.44444M12 1V8.77778" stroke="#F3F1F2" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tp-faq-md-thumb text-lg-end p-relative mb-30">
              <atropos-component>
                <div className="app-stack-thumb-box p-relative text-end rounded-circle">
                  <div className="my-atropos">
                    <div className="atropos">
                      <div className="atropos-scale">
                        <div className="atropos-rotate">
                          <div className="atropos-inner">
                            <img 
                              data-atropos-offset="-4.5" 
                              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=600&fit=crop" 
                              alt="Event planning and celebration" 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </atropos-component>
              <img className="tp-faq-md-shape upslide" src="/assets/img/faq/md/shape.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

