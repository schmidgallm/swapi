import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Starships = ({ data }) => {
  return (
    <Fragment>
      <h2>Starships</h2>
      <div className='content-cards'>
        {data.map((starship) => {
          return (
            <div className='card' key={uuidv4()}>
              <div className='card-title'>
                <h3>{starship.name}</h3>
              </div>
              <div className='card-body'>
                <p>Model {starship.model}</p>
                <p>Manufacturer {starship.manufacturer}</p>
                <p>Cost in Credits {starship.cost_in_credits}</p>
                <p>Cargo Capacity {starship.cargo_capacity}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Starships;
