import React from 'react';
import { motion } from 'framer-motion';

const svgVariants = {
  start: {
    opacity: 0,
    pathLength: 0,
  },
  finished: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

function Bag() {
  return (
    <div className='bag-svg'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='#fff'
      >
        <motion.path
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='1'
          d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
          variants={svgVariants}
          initial='start'
          animate='finished'
        />
      </svg>
    </div>
  );
}

export default Bag;
