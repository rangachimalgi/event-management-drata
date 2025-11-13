import React from 'react';
import { useSectionAnimation } from '../../hooks/useSectionAnimation';

const FAQ = () => {
  const sectionRef = useSectionAnimation({
    staggerDelay: 0.15,
    animateParagraphs: true,
  });

  const faqs = [
    {
      id: 'order_one',
      question: 'What are your clinic hours?',
      answer: 'Branding is the process of creating a unique identity for your business, <b>including visuals, messaging, and positioning.</b> It helps build trust, recognition.',
      show: true
    },
    {
      id: 'order_two',
      question: 'Is there a mobile app available?',
      answer: 'Branding is the process of creating a unique identity for your business, <b>including visuals, messaging, and positioning.</b> It helps build trust, recognition.',
      show: false
    },
    {
      id: 'order_three',
      question: 'What insurance plans do you accept?',
      answer: 'Branding is the process of creating a unique identity for your business, <b>including visuals, messaging, and positioning.</b> It helps build trust, recognition.',
      show: false
    }
  ];

  return (
    <div ref={sectionRef} className="tp-faq-area pt-145 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-30">
            <div className="tp-faq-md-title-wrap mb-30">
              <span className="tp-text-revel-anim fix tp-section-md-subtitle tp-ff-dm fw-600 fs-16 ls-m-3 tp-text-common-white d-inline-block mb-10">Clarity in Every Question</span>
              <h2 className="tp-text-revel-anim fix tp-section-md-title tp-ff-familjen fs-62 lh-1 ls-m-3 tp-text-common-white mb-20">Your health questions, clearly answered.</h2>
            </div>
            <div className="tp-faq-wrap tp-faq-cst-tab-content tp-faq-md-tab-content mb-40">
              <div className="accordion mb-60" id="general_faqaccordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="accordion-item tp_fade_anim" data-delay=".4">
                    <h2 className="accordion-header p-relative" id={faq.id}>
                      <button 
                        className={`tp-faq-btn ${faq.show ? '' : 'collapsed'}`} 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#order__collapse_${faq.id.split('_')[1]}`}
                        aria-expanded={faq.show}
                        aria-controls={`order__collapse_${faq.id.split('_')[1]}`}
                      >
                        {faq.question}
                        <span className="accordion-btn"></span>
                      </button>
                    </h2>
                    <div 
                      id={`order__collapse_${faq.id.split('_')[1]}`} 
                      className={`accordion-collapse collapse ${faq.show ? 'show' : ''}`}
                      aria-labelledby={faq.id}
                      data-bs-parent="#general_faqaccordion"
                    >
                      <div className="accordion-body tp-faq-details-para">
                        <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                      </div>
                    </div>
                  </div>
                ))}
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
                            <img data-atropos-offset="-4.5" src="/assets/img/faq/md/thumb-dark.png" alt="" />
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

