import React, { useState } from 'react'
import './search_style.css'

export const Seach = (props) => {
    const {getDataFromSearchComponent} = props;
    const [inputValue, setInputValue] = useState('');
    
    function handleInput(){
       const {value} = event.target;
       //set the event value
       setInputValue(value); 

    }

    function handleSubmit(){
        event.preventDefault();
        getDataFromSearchComponent(inputValue);
    }
  return (
    <form className="search" onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder='Search reciepes' id='seach' onChange={handleInput} value={inputValue}/>
        <button type='submit'>Seach</button>
    </form> 
  )
}

