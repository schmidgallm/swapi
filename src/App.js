import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
    <div id='wrapper' className='grid'>
      <Navbar />
      <Content />
    </div>
  );
}

export default App;