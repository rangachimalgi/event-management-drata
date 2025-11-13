import React from 'react';
import { useSectionAnimation } from '../../hooks/useSectionAnimation';

const Blog = () => {
  const sectionRef = useSectionAnimation({
    staggerDelay: 0.15,
    animateParagraphs: false,
  });

  const blogs = [
    {
      img: 'thumb.jpg',
      date: '05 July 2026',
      comments: '01 Comments',
      title: 'Post-Surgery Care  What You Should Really Expect'
    },
    {
      img: 'thumb-2.jpg',
      date: '05 July 2026',
      comments: '01 Comments',
      title: 'When to See a Symptoms You Shouldn\'t Ignore'
    },
    {
      img: 'thumb-3.jpg',
      date: '05 July 2026',
      comments: '01 Comments',
      title: 'Understanding Early Signs of Chronic Illness'
    }
  ];

  return (
    <div ref={sectionRef} id="blog" className="tp-blog-area pt-155 section-m-spacing pb-130">
      <div className="container-fluid container-1824">
        <div className="row align-items-end mb-20">
          <div className="col-lg-8">
            <div className="tp-testimonial-ai-title-wrap mb-30">
              <span className="tp-text-revel-anim fix tp-section-md-subtitle tp-ff-dm fw-600 fs-16 ls-m-3 tp-text-common-white d-inline-block mb-10">Our Latest Blog</span>
              <h2 className="tp-text-revel-anim fix tp-section-md-title tp-ff-familjen fs-62 lh-1 ls-m-3 tp-text-common-white mb-20">
                Insights from medical<br /> health experts.
              </h2>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tp-blog-md-btn mb-40 text-lg-end tp_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
              <a href="#blog" className="tp-btn-md tp-bg-theme-1 tp-left-right p-relative hover-text-white d-inline-block tp-text-grey-5 lh-1 fs-16 fw-700 tp-ff-dm">
                <span className="td-text d-inline-block mr-5">See All Blog</span>
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
        <div className="row">
          {blogs.map((blog, index) => (
            <div key={index} className="col-xl-4 col-lg-6 col-md-6 tp_fade_anim" data-delay=".4" data-fade-from={index === 0 ? 'left' : index === 2 ? 'right' : 'bottom'} data-ease="bounce">
              <div className="tp-blog-ai-item tp-blog-md-item tp--hover-item tp-round-24 mb-30">
                <a href="#blog-details" className="tp-round-24 w-100 fix p-relative d-inline-block">
                  <div className="tp-blog-ai-thumb w-100 tp--hover-img tp-round-24" data-displacement="/assets/img/imghover/stripe-mul.png" data-intensity="0.2" data-speedin="1" data-speedout="1">
                    <img className="tp-round-24 w-100" src={`/assets/img/blog/md/${blog.img}`} alt="" />
                  </div>
                </a>
                <div className="tp-blog-ai-content tp-blog-md-content text-center">
                  <div className="tp-blog-md-dates">
                    <span className="tp-ff-dm mb-5 fw-500 fs-16 tp-text-common-white d-inline-block">
                      <svg className="mr-5" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12.0683C0.000926244 12.8416 0.308512 13.5829 0.855289 14.1297C1.40207 14.6765 2.14339 14.984 2.91665 14.985H11.0833C11.8565 14.984 12.5978 14.6765 13.1446 14.1297C13.6914 13.5829 13.999 12.8416 13.9999 12.0683V6.81836H0V12.0683Z" fill="currentColor" />
                        <path d="M11.0833 2.15201H10.4999V1.56868C10.4999 1.41397 10.4385 1.2656 10.3291 1.1562C10.2197 1.04681 10.0713 0.985352 9.9166 0.985352C9.76189 0.985352 9.61352 1.04681 9.50412 1.1562C9.39473 1.2656 9.33327 1.41397 9.33327 1.56868V2.15201H4.66663V1.56868C4.66663 1.41397 4.60518 1.2656 4.49578 1.1562C4.38639 1.04681 4.23801 0.985352 4.0833 0.985352C3.9286 0.985352 3.78022 1.04681 3.67083 1.1562C3.56143 1.2656 3.49998 1.41397 3.49998 1.56868V2.15201H2.91665C2.14339 2.15294 1.40207 2.46052 0.855289 3.0073C0.308512 3.55408 0.000926244 4.2954 0 5.06866L0 5.65199H13.9999V5.06866C13.999 4.2954 13.6914 3.55408 13.1446 3.0073C12.5978 2.46052 11.8565 2.15294 11.0833 2.15201Z" fill="currentColor" />
                      </svg>
                      {blog.date}
                    </span>
                    <span className="tp-ff-dm mb-5 fw-500 fs-16 tp-text-common-white d-inline-block">
                      <svg className="mr-5" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.44455 0.292933C3.93432 0.0990803 5.45281 0 6.99428 0C8.53575 0 10.0542 0.0997982 11.544 0.292933C12.9239 0.472426 13.9068 1.62908 13.9887 2.96882C13.7486 2.88885 13.4999 2.83799 13.2477 2.81733C11.2361 2.65033 9.21411 2.65033 7.20249 2.81733C5.50953 2.95805 4.30192 4.38969 4.30192 6.00082V9.07805C4.30124 9.6695 4.46402 10.2496 4.77227 10.7544C5.08052 11.2592 5.52226 11.6689 6.04872 11.9385L4.14397 13.8425C4.06866 13.9177 3.97276 13.9689 3.86837 13.9897C3.76398 14.0104 3.65578 13.9998 3.55745 13.959C3.45911 13.9183 3.37505 13.8494 3.31587 13.7609C3.2567 13.6724 3.22507 13.5684 3.22497 13.462V10.5686C2.96449 10.5409 2.70434 10.5102 2.44455 10.4767C1.00288 10.2886 -0.00585938 9.03425 -0.00585938 7.61913V3.15047C-0.00585938 1.73606 1.00288 0.480324 2.44455 0.292933Z" fill="currentColor" />
                        <path d="M10.2252 3.76953C9.23724 3.76953 8.25866 3.81046 7.29156 3.89087C6.1859 3.98277 5.37891 4.92044 5.37891 6.00171V9.07823C5.37891 10.1602 6.18877 11.0986 7.29587 11.1891C8.1883 11.2623 9.09077 11.3018 10.0012 11.3075L11.9985 13.3042C12.0738 13.3794 12.1697 13.4306 12.2741 13.4514C12.3785 13.4721 12.4867 13.4615 12.585 13.4207C12.6834 13.38 12.7674 13.3111 12.8266 13.2226C12.8858 13.1341 12.9174 13.0301 12.9175 12.9237V11.2077L13.1544 11.1891C14.2615 11.0993 15.0714 10.1602 15.0714 9.07823V6.00099C15.0714 4.92044 14.2637 3.98277 13.1588 3.89015C12.183 3.80946 11.2043 3.76922 10.2252 3.76953Z" fill="currentColor" />
                      </svg>
                      {blog.comments}
                    </span>
                  </div>
                  <h4 className="tp-blog-md-title tp-ff-familjen fs-42 lh-1 ls-m-4 tp-text-common-white mb-25">
                    <a href="#blog-details" className="underline-white">{blog.title}</a>
                  </h4>
                  <a href="#blog-details" className="tp-left-right p-relative hover-text-white d-inline-block text-uppercase tp-text-common-white lh-1 fs-16 fw-700 tp-ff-dm">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

