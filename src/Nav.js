import React,{useState, useContext} from 'react';
import {SeasonContext} from './MovieContext'
const Navbar = () => {
const [season,setSeason]=useContext(SeasonContext)
  return ( 
  <div>
    <h3>Movies list</h3>
    <p>Detail of moviesList:: {season.length}</p>
  </div> );
}
 
export default Navbar;