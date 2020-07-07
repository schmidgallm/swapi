import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Films = ({ data }) => {
  return (
    <Fragment>
      <h2>Films</h2>
      <div className='content-cards'>
        {data.map((film) => {
          return (
            <div className='card' key={uuidv4()}>
              <div className='card-title'>
                <h3>
                  Episode {film.episode_id} {film.title}
                </h3>
              </div>
              <div className='card-body'>
                <p>Director {film.director}</p>
                <p>Producer {film.producer}</p>
                <p>Release Date {film.release_date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Films;
