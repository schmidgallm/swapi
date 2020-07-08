import React, { Fragment, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Vehicles = (props) => {
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
      <h2>Vehicles</h2>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='content-cards'>
          {data.map((vehicle) => {
            return (
              <div className='card' key={uuidv4()}>
                <div className='card-title'>
                  <h3>{vehicle.name}</h3>
                </div>
                <div className='card-body'>
                  <p>Model {vehicle.model}</p>
                  <p>Manufacturer {vehicle.manufacturer}</p>
                  <p>Cost in Credits {vehicle.cost_in_credits}</p>
                  <p>Cargo Capacity {vehicle.cargo_capacity}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Fragment>
  );
};

export default Vehicles;
