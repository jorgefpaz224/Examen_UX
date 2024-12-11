import React from 'react'
import { useState } from 'react';

import Restaurant from './Restaurant';
import RestaurantCard from './RestaurantCard';

function PageRestaurantes() {
  const [restaurants, setRestaurants] = useState([
    { id: 1, name: 'Restaurant A', description: 'Description A' },
    { id: 2, name: 'Restaurant B', description: 'Description B' },
    { id: 3, name: 'Restaurant C', description: 'Description C' }
  ]);

  return (
    <div>
      <h1> BIENVENIDO A NUESTROS RESTAURANTES</h1>
      {restaurants.map((restaurant) => (
        <RestaurantCard 
          id={restaurant.id} 
          name={restaurant.name} 
          description={restaurant.description} 
        />
      ))}
    </div>
  )
}

export default PageRestaurantes;
