import React from 'react';
import './App.scss';
import Nav from './Components/Navigation/Nav';

function App() {
  return (
    <div className='homepage'>
      <section className='main'>
        <article className='nav-wrapper'>
          <Nav />
        </article>
      </section>
      <section className='filter'></section>
    </div>
  );
}

export default App;
