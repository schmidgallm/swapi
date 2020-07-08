import React, { Fragment, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import Spinner from '../Spinner';

const Planets = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const request = await fetch(`https://swapi.dev/api${props.match.path}/`);
      const response = await request.json();
      setData(response.results);
      setLoading(false);
    };
    fetchResults();
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <motion.h2 initial={{ x: '-100vw' }} animate={{ x: 0 }}>
            {props.match.path.split('/').pop()}
          </motion.h2>
          <div className='content-cards'>
            {data.map((planet) => {
              return (
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className='card'
                  key={uuidv4()}
                >
                  <div className='card-title'>
                    <h3>{planet.name}</h3>
                  </div>
                  <div className='card-body'>
                    <p>Climate {planet.climate}</p>
                    <p>Gravity {planet.gravity}</p>
                    <p>Orbit Period {planet.orbital_period}</p>
                    <p>Population {planet.population}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Planets;
