// Dependencies
import React, { useEffect, useState } from 'react';

// CSS
import './App.css';

// Components
import Navbar from './components/Navbar';
import People from './components/ParamSearches/People';
import Films from './components/ParamSearches/Films';
import Planets from './components/ParamSearches/Planets';
import Species from './components/ParamSearches/Species';
import Starships from './components/ParamSearches/Starships';
import Vehicles from './components/ParamSearches/Vehicles';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [param, setParam] = useState('people');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchResults = async () => {
      const request = await fetch(
        `https://swapi.dev/api/${param}/?search=${search}`
      );
      const response = await request.json();
      setData(response.results);
      setLoading(false);
    };
    fetchResults();
  }, [param, search]);

  // Render which Page based by Param
  const renderSwitch = (query) => {
    switch (query) {
      case 'people':
        return <People isLoading={isLoading} data={data} />;
      case 'films':
        return <Films data={data} />;
      case 'planets':
        return <Planets data={data} />;
      case 'species':
        return <Species data={data} />;
      case 'starships':
        return <Starships data={data} />;
      case 'vehicles':
        return <Vehicles data={data} />;
      default:
        return <People data={data} />;
    }
  };
  return (
    <div id='wrapper' className='grid'>
      <Navbar
        getSearch={(search) => setSearch(search)}
        getParam={(param) => setParam(param)}
      />
      <div className='content'>
        <div className='content-header'>
          <h1>Star Wars</h1>
        </div>
        <div className='content-body'>
          {isLoading ? <h1>Loading...</h1> : renderSwitch(param)}
        </div>
      </div>
    </div>
  );
};

export default App;
