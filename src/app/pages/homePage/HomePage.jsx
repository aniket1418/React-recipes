"use client"
import { Seach } from '@/app/components/search'
import React, { useState } from 'react'
import "./Home_style.css"
import Recipe from '@/app/components/recipe-items'


const HomePage = () => {
  //All the useEffects.
  //Loading state
  const [loadingState, setLoadingState] = useState(false);
  //Save the reciepes from the api
  const [reciepes, setReciepes] = useState([]);

  //Custome methods.
  function getDataFromSearchComponent(getData){
    //Setting the loading state -> true
    setLoadingState(true);
    //Calling the response from the API
    async function getReciepes() {
      //Fetch the data from the api.
      const apiResponse = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=e661c5c4793249a18a9165950062ce1f&query=${getData}`);
      const result = await apiResponse.json()
      //Destructure the Results from result response
      const {results} = result;
      setReciepes(results);
      setLoadingState(false);
    }
    //Call out the reciepe function.
    setTimeout(() => {
      getReciepes();
    },2000);
  }
  return (
    <>
      <div>
          <h3 className="appHeading">Seach Dishes</h3>
          <Seach getDataFromSearchComponent={getDataFromSearchComponent}/>    
          {loadingState && 
          <div className='loading'></div>
          }
          <div className='items'>
            {
              reciepes && reciepes.length > 0 
              ? reciepes.map((item, index) => <Recipe id={item.id} image={item.image} title={item.title}/>) : null
            }
          </div>
      </div> 
    </>
     
  ) 
}

export default HomePage
