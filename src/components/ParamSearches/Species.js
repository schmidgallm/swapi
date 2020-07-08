import React, { Fragment, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Species = (props) => {
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
      <h2>Species</h2>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='content-cards'>
          {data.map((species) => {
            return (
              <div className='card' key={uuidv4()}>
                <div className='card-title'>
                  <h3>{species.name}</h3>
                </div>
                <div className='card-body'>
                  <p>Classification {species.classificiation}</p>
                  <p>Language {species.language}</p>
                  <p>Designation {species.designation}</p>
                  <p>Average Lifespan {species.average_lifespan}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Fragment>
  );
};

export default Species;
