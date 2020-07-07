import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

const People = ({ isLoading, data }) => {
  console.log(data);
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
                <ul>
                  <li>
                    Born <span>{person.birth_year}</span>
                  </li>
                  <li>
                    Eye Color: <span>{person.eye_color}</span>
                  </li>
                  <li>
                    Gender: <span>{person.gender}</span>
                  </li>
                  <li>
                    Homeworld: <span>{person.homeworld}</span>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default People;
