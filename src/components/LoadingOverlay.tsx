'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingOverlay({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    // Wait at least 800ms for the animation to be noticeable
    const minDelay = new Promise((resolve) => setTimeout(resolve, 800));
    const loadEvent = new Promise((resolve) => {
      if (document.readyState === 'complete') {
        resolve(null);
      } else {
        const handleLoad = () => resolve(null);
        window.addEventListener('load', handleLoad);
        setTimeout(() => {
          window.removeEventListener('load', handleLoad);
          resolve(null);
        }, 3000);
      }
    });

    Promise.all([minDelay, loadEvent]).then(() => {
      setIsReady(true);
    });
  }, []);

  return (
    <>
      {children}

      <AnimatePresence>
        {!isAnimationComplete && (
          <motion.div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: '#000',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ clipPath: 'inset(50% 49.8% 50% 49.8%)' }}
              animate={
                isReady
                  ? {
                      clipPath: [
                        'inset(50% 49.8% 50% 49.8%)',
                        'inset(0% 49.8% 0% 49.8%)',
                        'inset(0% 0% 0% 0%)',
                      ],
                    }
                  : { clipPath: 'inset(50% 49.8% 50% 49.8%)' }
              }
              transition={{
                duration: 1.4,
                times: [0, 0.4, 1],
                ease: [0.76, 0, 0.24, 1],
              }}
              onAnimationComplete={() => {
                if (isReady) {
                  setIsAnimationComplete(true);
                }
              }}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: '#ffffff', // The solid white line
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
