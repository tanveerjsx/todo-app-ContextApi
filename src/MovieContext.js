import React, { useState,createContext } from 'react';

export const SeasonContext=createContext();

export const SeasonProvider=props=>{
  const [season,setSeason]=useState([
    {id:23423,name:"the rise of ottomen empire",ticket:"23$"},
    {id:809323,name:"stranger things",ticket:"18$"},
    {id:78693,name:"vikings",ticket:"23$"},
    {id:3457,name:"Better call saul",ticket:"12$" }
  ])
  return(
    <SeasonContext.Provider value={[season,setSeason]}>
      {props.children}
      </SeasonContext.Provider>
  )
}
