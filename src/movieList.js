import React, { useState,useContext } from 'react';
import Movie from "./movie"
import {SeasonContext} from './MovieContext'


const SeasonList=()=>{
  const [season,setSeason]=useContext(SeasonContext)
return( 
<div>

  <ul>

 {season.map(sea=><Movie key={sea.id} name={sea.name} price={sea.ticket} />)} 
  </ul>
</div>
)
}
export default SeasonList;