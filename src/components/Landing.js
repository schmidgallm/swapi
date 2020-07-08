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
      <motion.p animate={{ opacity: 1 }}>
        <span>
          <i className='fa fa-angle-double-left'></i>
        </span>
        {!hint ? null : hint}
      </motion.p>
    </div>
  );
};

export default Landing;

//
