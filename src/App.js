import React from 'react';
import './App.css';
import Ghibli from './components/Ghibli';

function App() {
  return (
    <>
      <div className='App'>
        <div className='header-container'>
          <h1 className='header-image'>Studio Ghibli Films</h1>
        </div>
        <div className='list-container'>
          <Ghibli />
        </div>
        <div className='footer-container'>
          <footer className='.footer-img'>
            <img src='https://imgur.com/ei5Q0oy.jpg' alt='little icon' />
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
