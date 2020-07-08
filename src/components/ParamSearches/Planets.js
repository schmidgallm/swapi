import React, { Fragment, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
      <h2>Planets</h2>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='content-cards'>
          {data.map((planet) => {
            return (
              <div className='card' key={uuidv4()}>
                <div className='card-title'>
                  <h3>{planet.name}</h3>
                </div>
                <div className='card-body'>
                  <p>Climate {planet.climate}</p>
                  <p>Gravity {planet.gravity}</p>
                  <p>Orbit Period {planet.orbital_period}</p>
                  <p>Population {planet.population}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Fragment>
  );
};

export default Planets;
