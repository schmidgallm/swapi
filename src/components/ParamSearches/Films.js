import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Films = ({ data }) => {
  console.log(data);
  return (
    <Fragment>
      <h2>Films</h2>
      <div className='content-cards'>
        {data.map((dat) => {
          return (
            <div className='card' key={uuidv4()}>
              <div className='card-title'>
                <h3>{dat.title}</h3>
                <p>{dat.episode_id}</p>
              </div>
              <div className='card-body'></div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Films;
