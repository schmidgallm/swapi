import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

const People = ({ data }) => {
  return (
    <Fragment>
      <h2>People</h2>
      <div className='content-cards'>
        {data.map((person) => {
          return (
            <div className='card' key={uuidv4()}>
              <div className='card-title'>
                <h3>{person.name}</h3>
              </div>
              <div className='card-body'>
                <p>Born {person.birth_year}</p>
                <p>Eye Color {person.eye_color}</p>
                <p>Gender {person.gender}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default People;
