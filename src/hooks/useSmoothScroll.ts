import { useEffect } from 'react';

interface SmoothScrollOptions {
  delay?: number;
  pace?: number;
}

export const useSmoothScroll = (options: SmoothScrollOptions = {}) => {
  const { delay = 100, pace = 0.5 } = options;

  useEffect(() => {
    let animationFrame: number;
    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;
    let isScrolling = false;
    let scrollTimeout: any;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      if (Math.abs(targetScrollY - currentScrollY) > 0.5) {
        currentScrollY = lerp(currentScrollY, targetScrollY, 0.08);
        window.scrollTo(0, currentScrollY);
        animationFrame = requestAnimationFrame(animate);
      } else {
        currentScrollY = targetScrollY;
        window.scrollTo(0, currentScrollY);
        isScrolling = false;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Don't prevent default - let natural scroll happen first
      
      // Clear any existing timeout
      clearTimeout(scrollTimeout);
      
      // Update target based on where we'll naturally be
      targetScrollY = window.scrollY + (e.deltaY * pace);
      
      // Clamp values
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollY = Math.max(0, Math.min(targetScrollY, maxScroll));

      // Apply delay before starting animation
      scrollTimeout = setTimeout(() => {
        if (!isScrolling) {
          isScrolling = true;
          currentScrollY = window.scrollY;
          animate();
        }
      }, delay);
    };

    // Ensure body can scroll
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.scrollBehavior = 'auto';
    
    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      document.documentElement.style.scrollBehavior = '';
    };
  }, [delay, pace]);
};
