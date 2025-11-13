import React, { useEffect, useRef } from 'react';

const Funfact = () => {
  const funfactRef = useRef(null);
  const animationsInitialized = useRef(false);
  const scrollTriggersRef = useRef([]);

  useEffect(() => {
    // Wait for GSAP to be available
    const initAnimations = () => {
      if (typeof window.gsap === 'undefined' || animationsInitialized.current || !funfactRef.current) {
        return;
      }

      const gsap = window.gsap;
      const ScrollTrigger = window.gsap?.plugins?.scrollTrigger || window.ScrollTrigger;

      if (!ScrollTrigger) {
        // If ScrollTrigger is not available, register it
        if (window.gsap?.registerPlugin && window.ScrollTrigger) {
          window.gsap.registerPlugin(window.ScrollTrigger);
        }
      }

      // Initialize fade animations for tp_fade_anim elements
      const fadeElements = funfactRef.current?.querySelectorAll('.tp_fade_anim');
      if (fadeElements && fadeElements.length > 0) {
        fadeElements.forEach((item) => {
          const fadeOffset = item.getAttribute('data-fade-offset') || 40;
          const duration = item.getAttribute('data-duration') || 0.75;
          const fadeDirection = item.getAttribute('data-fade-from') || 'bottom';
          const onScroll = item.getAttribute('data-on-scroll') || '1';
          const delay = item.getAttribute('data-delay') || 0.15;
          const ease = item.getAttribute('data-ease') || 'power2.out';

          const animSettings = {
            opacity: 0,
            ease: ease,
            duration: parseFloat(duration),
            delay: parseFloat(delay),
            x: fadeDirection === 'left' ? -fadeOffset : fadeDirection === 'right' ? fadeOffset : 0,
            y: fadeDirection === 'top' ? -fadeOffset : fadeDirection === 'bottom' ? fadeOffset : 0,
          };

          if (onScroll === '1' && ScrollTrigger) {
            animSettings.scrollTrigger = {
              trigger: item,
              start: 'top 85%',
            };
          }
          const animation = gsap.from(item, animSettings);
          if (animation && animation.scrollTrigger) {
            scrollTriggersRef.current.push(animation.scrollTrigger);
          }
        });
      }

      // Initialize text bounce animations
      const bounceTrigger = funfactRef.current?.querySelector('.tp-text-bounce-trigger');
      if (bounceTrigger && ScrollTrigger) {
        const bounceElements = bounceTrigger.querySelectorAll('.tp-text-bounce');
        if (bounceElements && bounceElements.length > 0) {
          gsap.set('.tp-text-bounce', { y: 100, opacity: 0 });
          bounceElements.forEach((btn) => {
            const delay = btn.getAttribute('data-delay') || 0.15;
            const animation = gsap.to(btn, {
              scrollTrigger: {
                trigger: bounceTrigger,
                start: 'top center',
                markers: false,
              },
              duration: 1,
              delay: parseFloat(delay),
              ease: 'back.out(1.7)',
              y: 0,
              opacity: 1,
            });
            if (animation && animation.scrollTrigger) {
              scrollTriggersRef.current.push(animation.scrollTrigger);
            }
          });
        }
      }

      // Initialize funfact panel scroll animation (for desktop) - only if multiple panels exist
      if (window.matchMedia('(min-width: 1200px)').matches && ScrollTrigger) {
        const panelWrap = funfactRef.current?.querySelector('.tp-funfact-panel-wrap');
        if (panelWrap) {
          const panels = panelWrap.querySelectorAll('.tp-funfact-panel');
          // Only animate if there are multiple panels
          if (panels && panels.length > 1) {
            try {
              const animation = gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: 'none',
                scrollTrigger: {
                  start: 'top 70px',
                  trigger: panelWrap,
                  pin: true,
                  scrub: 1,
                  end: () => `+=${panelWrap.offsetWidth}`,
                },
              });
              if (animation && animation.scrollTrigger) {
                scrollTriggersRef.current.push(animation.scrollTrigger);
              }
            } catch (e) {
              console.warn('Funfact panel animation error:', e);
            }
          }
        }
      }

      animationsInitialized.current = true;
    };

    // Wait for GSAP to be fully loaded
    const initializeWhenReady = () => {
      if (typeof window.gsap !== 'undefined' && funfactRef.current) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          initAnimations();
        }, 100);
        return true;
      }
      return false;
    };

    // Try to initialize immediately
    if (!initializeWhenReady()) {
      // Wait for GSAP to load
      const checkGSAP = setInterval(() => {
        if (initializeWhenReady()) {
          clearInterval(checkGSAP);
        }
      }, 100);

      // Cleanup interval after 10 seconds
      const timeout = setTimeout(() => {
        clearInterval(checkGSAP);
        if (typeof window.gsap === 'undefined') {
          console.warn('GSAP not loaded - funfact animations may not work');
        }
      }, 10000);

      return () => {
        clearInterval(checkGSAP);
        clearTimeout(timeout);
      };
    }

    // Re-initialize on resize for responsive behavior
    const handleResize = () => {
      if (typeof window.gsap !== 'undefined') {
        // Kill existing ScrollTriggers
        if (scrollTriggersRef.current.length > 0 && window.ScrollTrigger) {
          scrollTriggersRef.current.forEach(st => {
            try {
              st.kill();
            } catch (e) {
              // Ignore errors
            }
          });
          scrollTriggersRef.current = [];
        }
        animationsInitialized.current = false;
        initAnimations();
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      // Kill all ScrollTriggers on unmount
      if (scrollTriggersRef.current.length > 0 && window.ScrollTrigger) {
        scrollTriggersRef.current.forEach(st => {
          try {
            st.kill();
          } catch (e) {
            // Ignore errors
          }
        });
        scrollTriggersRef.current = [];
      }
    };
  }, []);

  const funfactImages = [
    { id: 1, img: 'funfact-1.png', delay: '0.3' },
    { id: 2, img: 'funfact-placeholder.png', delay: '0.5' },
    { id: 3, img: 'funfact-placeholder.png', delay: '0.7' },
    { id: 4, img: 'funfact-1-1.png', delay: '0.9' },
    { id: 5, img: 'funfact-placeholder.png', delay: '1.0' },
    { id: 6, img: 'funfact-2.png', delay: '1.1' },
    { id: 7, img: 'funfact-3.png', delay: '1.2' },
    { id: 8, img: 'funfact-placeholder-2.png', delay: '1.3' },
  ];

  return (
    <div className="tp-funfact-area" ref={funfactRef}>
      <div className="tp-funfact-panel-wrap">
        <div className="tp-funfact-panel">
          <div className="tp-funfact-green-wrap bg-position tp-text-bounce-trigger p-relative" data-background="/assets/img/funfact/bg.jpg">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="tp-funfact-img-wrap">
                    <div className="row gx-20">
                      {funfactImages.map((item) => (
                        <div key={item.id} className="col-lg-3 col-sm-4 col-6">
                          <div className="tp-funfact-img mb-20 tp_fade_anim" data-delay={item.delay}>
                            <img src={`/assets/img/funfact/${item.img}`} alt="" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="tp-funfact-content-wrap ml-85">
                    <div className="tp-funfact-content tp_fade_anim" data-fade-from="right" data-delay="1.3">
                      <span className="tp-funfact-subtitle d-inline-block tp-ff-dm fw-600 fs-16 tp-text-common-black-5">( Medical )</span>
                      <h4 className="tp-funfact-title tp-ff-familjen fs-92 fs-xl-70 fs-lg-60 ls-m-4 tp-text-common-black-5">
                        Real talk, <br /> real impact
                      </h4>
                    </div>
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

export default Funfact;

