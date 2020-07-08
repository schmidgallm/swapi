import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Landing = () => {
  const [hint, setHint] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setHint(
        'Use the navigation to learn about cool star wars facts using the SWAPI API'
      ); // count is 0 here
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const variants = {
    hidden: { opacity: 0, scale: 0, x: 0 },
    visible: { opacity: 1, scale: 5, x: 50 },
  };

  return (
    <div className='landing'>
      <motion.h1
        initial='initial'
        animate='visible'
        transition={{ duration: 2 }}
        variants={variants}
      >
        Star Wars
      </motion.h1>
      {!hint ? null : (
        <div className='hint'>
          <motion.i
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className='fa fa-angle-double-left'
          ></motion.i>

          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {hint}
          </motion.p>
        </div>
      )}
    </div>
  );
};

export default Landing;

//
