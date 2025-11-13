import { useEffect, useRef } from 'react';

/**
 * Custom hook to initialize GSAP scroll-triggered animations for sections
 * Animates elements sequentially with paragraph-by-paragraph support
 */
export const useSectionAnimation = (options = {}) => {
  const sectionRef = useRef(null);
  const animationsInitialized = useRef(false);
  const scrollTriggersRef = useRef([]);

  const {
    staggerDelay = 0.15,
    fadeOffset = 40,
    duration = 0.75,
    ease = 'power2.out',
    startTrigger = 'top 85%',
    animateParagraphs = true,
  } = options;

  useEffect(() => {
    const initAnimations = () => {
      if (
        typeof window.gsap === 'undefined' ||
        animationsInitialized.current ||
        !sectionRef.current
      ) {
        // If GSAP not available, ensure elements are visible
        if (!sectionRef.current) return;
        const allElements = sectionRef.current.querySelectorAll('*');
        allElements.forEach(el => {
          if (el.style.opacity === '0' || getComputedStyle(el).opacity === '0') {
            el.style.opacity = '1';
          }
        });
        return;
      }

      const gsap = window.gsap;
      const ScrollTrigger = window.gsap?.plugins?.scrollTrigger || window.ScrollTrigger;

      if (!ScrollTrigger) {
        if (window.gsap?.registerPlugin && window.ScrollTrigger) {
          window.gsap.registerPlugin(window.ScrollTrigger);
        } else {
          console.warn('ScrollTrigger not available - showing content without animation');
          // Make sure content is visible if ScrollTrigger fails
          if (sectionRef.current) {
            const allElements = sectionRef.current.querySelectorAll('*');
            allElements.forEach(el => {
              if (el.style.opacity === '0') {
                el.style.opacity = '1';
              }
            });
          }
          return;
        }
      }

      // Helper function to check if element is already in viewport
      const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      };

      // Helper function to check if element is above viewport (already scrolled past)
      const isElementAboveViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.bottom < 0;
      };

      // Initialize fade animations for tp_fade_anim elements
      const fadeElements = sectionRef.current?.querySelectorAll('.tp_fade_anim');
      if (fadeElements && fadeElements.length > 0) {
        fadeElements.forEach((item, index) => {
          const fadeOffsetValue = item.getAttribute('data-fade-offset') || fadeOffset;
          const durationValue = item.getAttribute('data-duration') || duration;
          const fadeDirection = item.getAttribute('data-fade-from') || 'bottom';
          const onScroll = item.getAttribute('data-on-scroll') || '1';
          const delayValue = item.getAttribute('data-delay') || staggerDelay * (index + 1);
          const easeValue = item.getAttribute('data-ease') || ease;

          // Check if element is already visible in viewport
          const isInViewport = isElementInViewport(item);
          const isAboveViewport = isElementAboveViewport(item);
          
          // If element is already visible or scrolled past, skip animation
          if (isInViewport || isAboveViewport) {
            // Ensure it's visible
            item.style.opacity = '1';
            item.style.transform = 'none';
            return;
          }

          // Set initial state only if ScrollTrigger is available and element is below viewport
          const initialX = fadeDirection === 'left' ? -fadeOffsetValue : fadeDirection === 'right' ? fadeOffsetValue : 0;
          const initialY = fadeDirection === 'top' ? -fadeOffsetValue : fadeDirection === 'bottom' ? fadeOffsetValue : 0;
          
          if (onScroll === '1' && ScrollTrigger) {
            // Only hide if we have ScrollTrigger to animate it back
            gsap.set(item, {
              opacity: 0,
              x: initialX,
              y: initialY,
              immediateRender: false, // Don't apply immediately
            });
          }

          const animSettings = {
            opacity: 1,
            x: 0,
            y: 0,
            ease: easeValue,
            duration: parseFloat(durationValue),
            delay: parseFloat(delayValue),
            immediateRender: false,
          };

          if (onScroll === '1' && ScrollTrigger) {
            animSettings.scrollTrigger = {
              trigger: item,
              start: startTrigger,
              toggleActions: 'play none none none',
            };
          } else {
            // If no scroll trigger, animate immediately or show immediately
            if (onScroll === '1') {
              // Should have scroll trigger but doesn't - show immediately
              item.style.opacity = '1';
              item.style.transform = 'none';
              return;
            }
            animSettings.delay = parseFloat(delayValue);
          }

          try {
            const animation = gsap.to(item, animSettings);
            if (animation && animation.scrollTrigger) {
              scrollTriggersRef.current.push(animation.scrollTrigger);
            }
          } catch (e) {
            console.warn('Animation error:', e);
            // Fallback: make visible
            item.style.opacity = '1';
            item.style.transform = 'none';
          }
        });
      }

      // Animate paragraphs sequentially if enabled
      if (animateParagraphs && ScrollTrigger) {
        const paragraphs = sectionRef.current?.querySelectorAll('p');
        if (paragraphs && paragraphs.length > 0) {
          paragraphs.forEach((para, index) => {
            // Skip if already has tp_fade_anim class
            if (para.closest('.tp_fade_anim')) {
              return;
            }

            // Check if paragraph is already visible
            const isInViewport = isElementInViewport(para);
            const isAboveViewport = isElementAboveViewport(para);
            
            // If already visible or scrolled past, skip animation
            if (isInViewport || isAboveViewport) {
              para.style.opacity = '1';
              para.style.transform = 'none';
              return;
            }

            // Set initial state only if ScrollTrigger is available and element is below viewport
            gsap.set(para, {
              opacity: 0,
              y: 30,
              immediateRender: false,
            });

            try {
              const animation = gsap.to(para, {
                opacity: 1,
                y: 0,
                ease: 'power2.out',
                duration: 0.8,
                delay: index * 0.2,
                immediateRender: false,
                scrollTrigger: {
                  trigger: para,
                  start: 'top 90%',
                  toggleActions: 'play none none none',
                },
              });
              if (animation && animation.scrollTrigger) {
                scrollTriggersRef.current.push(animation.scrollTrigger);
              }
            } catch (e) {
              // Fallback: make visible
              para.style.opacity = '1';
              para.style.transform = 'none';
            }
          });
        }
      }

      // Animate headings sequentially
      if (ScrollTrigger) {
        const headings = sectionRef.current?.querySelectorAll('h1, h2, h3, h4, h5, h6');
        if (headings && headings.length > 0) {
          headings.forEach((heading, index) => {
            // Skip if already has animation class
            if (
              heading.classList.contains('tp_fade_anim') ||
              heading.classList.contains('text-anim') ||
              heading.closest('.tp_fade_anim')
            ) {
              return;
            }

            // Check if heading is already visible
            const isInViewport = isElementInViewport(heading);
            const isAboveViewport = isElementAboveViewport(heading);
            
            // If already visible or scrolled past, skip animation
            if (isInViewport || isAboveViewport) {
              heading.style.opacity = '1';
              heading.style.transform = 'none';
              return;
            }

            // Set initial state only if ScrollTrigger is available and element is below viewport
            gsap.set(heading, {
              opacity: 0,
              y: 40,
              immediateRender: false,
            });

            try {
              const animation = gsap.to(heading, {
                opacity: 1,
                y: 0,
                ease: 'power2.out',
                duration: 0.9,
                delay: index * 0.15,
                immediateRender: false,
                scrollTrigger: {
                  trigger: heading,
                  start: 'top 90%',
                  toggleActions: 'play none none none',
                },
              });
              if (animation && animation.scrollTrigger) {
                scrollTriggersRef.current.push(animation.scrollTrigger);
              }
            } catch (e) {
              // Fallback: make visible
              heading.style.opacity = '1';
              heading.style.transform = 'none';
            }
          });
        }
      }

      animationsInitialized.current = true;
    };

    // Fallback: ensure content is visible after timeout
    const fallbackTimeout = setTimeout(() => {
      if (sectionRef.current && !animationsInitialized.current) {
        console.warn('GSAP timeout - showing content without animation');
        const allElements = sectionRef.current.querySelectorAll('*');
        allElements.forEach(el => {
          if (el.style.opacity === '0' || getComputedStyle(el).opacity === '0') {
            el.style.opacity = '1';
            el.style.transform = 'none';
          }
        });
      }
    }, 3000);

    // Try to initialize immediately
    if (typeof window.gsap !== 'undefined') {
      setTimeout(() => {
        clearTimeout(fallbackTimeout);
        initAnimations();
      }, 100);
    } else {
      // Wait for GSAP to load
      const checkGSAP = setInterval(() => {
        if (typeof window.gsap !== 'undefined') {
          clearInterval(checkGSAP);
          clearTimeout(fallbackTimeout);
          setTimeout(() => {
            initAnimations();
          }, 100);
        }
      }, 100);

      // Cleanup interval after 5 seconds
      setTimeout(() => {
        clearInterval(checkGSAP);
      }, 5000);
    }

    // Re-initialize on resize (for responsive animations)
    const handleResize = () => {
      if (scrollTriggersRef.current.length > 0 && window.ScrollTrigger) {
        scrollTriggersRef.current.forEach((st) => {
          if (st && typeof st.refresh === 'function') {
            st.refresh();
          }
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      // Cleanup
      clearTimeout(fallbackTimeout);
      window.removeEventListener('resize', handleResize);

      if (scrollTriggersRef.current.length > 0 && window.ScrollTrigger) {
        scrollTriggersRef.current.forEach((st) => {
          if (st && typeof st.kill === 'function') {
            st.kill();
          }
        });
        scrollTriggersRef.current = [];
      }

      animationsInitialized.current = false;
    };
  }, [staggerDelay, fadeOffset, duration, ease, startTrigger, animateParagraphs]);

  return sectionRef;
};

