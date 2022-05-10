import {Navbar, BackgroundVideo} from './components';
import {Header, About, Skills, Footer} from './containers';
import './App.scss';
import React from 'react';

function App() {
  return (
    <div className='app'>
      <BackgroundVideo/>
      <Navbar />
      
      <Header />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
