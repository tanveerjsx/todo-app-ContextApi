import React from 'react';
 import './App.css';
 import Seasons from './movieList'
 import Nav from "./Nav"
import {SeasonProvider} from "./MovieContext"
import AddMovies from './AddMovie'
function App() {
  return (
    <SeasonProvider>
    <div className="App">
        <Nav/>
        <AddMovies/>
      <Seasons/>
    </div>
    </SeasonProvider>
  );
}

export default App;
