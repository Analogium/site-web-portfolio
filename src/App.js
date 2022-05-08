import {Navbar, BackgroundVideo} from './components';
import {Header} from './containers';
import './App.scss';
import React from 'react';

function App() {
  return (
    <div className='app'>
      <BackgroundVideo/>
      <Navbar />
      
      <Header />
    </div>
  );
}

export default App;
