import React from 'react'
import './recipe_style.css'
const Recipe = (props) => {
    console.log(props, 'recipe Items');
    const {id, image, title} = props;
  return (
    <div key={id} class="card">
        <img src={image} alt="Recipe Image" srcset="" className='item-image' />
        <p className='item-title'>{title}</p>
        <button className='favourite-button'>Favourite</button>
    </div>
  )
}

export default Recipe
