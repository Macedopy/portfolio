'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface JohnDeereAnimationProps {
  isOpen: boolean;
  onClose: () => void;
}

const JohnDeereAnimation = ({ isOpen, onClose }: JohnDeereAnimationProps) => {
  if (!isOpen) return null;
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          zIndex: 9999,
          pointerEvents: 'none'
        }}
        onClick={onClose}
      >
        <motion.span
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          style={{
            fontSize: '32px',
            fontWeight: 700,
            letterSpacing: '0.05em',
            color: '#4F9D33'
          }}
        >
          JOHN DEERE
        </motion.span>
      </motion.div>
    </AnimatePresence>
  );
};

export default JohnDeereAnimation;
