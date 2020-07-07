import React, { useState } from 'react';

const Navbar = ({ getSearch, getParam }) => {
  const [search, setSearch] = useState('');
  const [param, setParam] = useState('');

  const onSearchChange = (search) => {
    setSearch(search);
    getSearch(search);
  };

  const onParamChange = (param) => {
    setParam(param);
    getParam(param);
  };

  return (
    <div className='navbar'>
      <div id='toggle'>
        <i className='fa fa-times'></i>
      </div>
      <div className='input'>
        <form>
          <input
            id='search'
            type='text'
            placeholder='Search'
            onChange={(e) => onSearchChange(e.target.value)}
            value={search}
          />
          <select
            value={param}
            onChange={(e) => onParamChange(e.target.value)}
            name='param'
            id='params'
          >
            <option value='people'>People</option>
            <option value='films'>Films</option>
            <option value='starships'>Starships</option>
            <option value='vehicles'>Vehicles</option>
            <option value='species'>Species</option>
            <option value='planets'>Planets</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
