import React from 'react';
import { motion } from 'framer-motion';
import spinner from '../imgs/spinner.png';

const Spinner = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 10 }}
      className='spinner'
    >
      <img src={spinner} alt='empire logo spinning' />
    </motion.div>
  );
};

export default Spinner;
