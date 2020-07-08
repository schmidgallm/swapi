// Dependencies
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// CSS
import './App.css';

// Components
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import People from './components/ParamSearches/People';
import Films from './components/ParamSearches/Films';
import Planets from './components/ParamSearches/Planets';
import Species from './components/ParamSearches/Species';
import Starships from './components/ParamSearches/Starships';
import Vehicles from './components/ParamSearches/Vehicles';

const App = () => {
  return (
    <div id='wrapper' className='grid'>
      <Router>
        <Navbar />
        <div className='content'>
          <Route exact path='/' component={Landing} />
          <Switch>
            <Route exact path='/people' component={People} />
            <Route exact path='/films' component={Films} />
            <Route exact path='/planets' component={Planets} />
            <Route exact path='/species' component={Species} />
            <Route exact path='/starships' component={Starships} />
            <Route exact path='/vehicles' component={Vehicles} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

/*
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

  */
