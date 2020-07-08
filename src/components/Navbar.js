import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <motion.h1 animate={{ scale: 1.3 }} transition={{ ease: 'easeIn' }}>
        Star Wars
      </motion.h1>
      <ul>
        <li>
          <NavLink activeClassName='active' className='nav-link' to='/people'>
            People
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' className='nav-link' to='/films'>
            Films
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName='active'
            className='nav-link'
            to='/starships'
          >
            Starships
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' className='nav-link' to='/vehicles'>
            Vehicles
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' className='nav-link' to='/species'>
            Species
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' className='nav-link' to='/planets'>
            Planets
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
