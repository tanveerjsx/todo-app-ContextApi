import React, { useState,useContext } from 'react';
import {SeasonContext} from './MovieContext'

const AddSeason = () => {
  const [season,setSeason]=useContext(SeasonContext)
  const [name,setName]=useState()
  const [price,setPrice]=useState()
  const handleName=e=>{
    setName(e.target.value)
  }
  const handlePrice=e=>{
    setPrice(e.target.value)
  }
  const addItem=e=>{
    e.preventDefault();
    setSeason(prevSeason=>[...prevSeason,{name:name, ticket:price} ])
  }
  return ( 
    <form>
      <input type='text' name='name' value={name} onChange={handleName} />
      <input type='text' name='price' value={price} onChange={handlePrice} />
      <button type='submit'onClick={addItem} >Submit</button>
    </form>
   );
}
 
export default AddSeason;