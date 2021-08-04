import React, {useEffect, useState} from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <ListOfGifs keyword='dragon ball' />
      </section>
    </div>
  );
}

export default App;
