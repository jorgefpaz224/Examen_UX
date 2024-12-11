import React from "react";
import { useState } from "react";

import Restaurant from "./Restaurant";
import RestaurantCard from "./RestaurantCard";

function PageRestaurantes() {

  //todos los restaurantes registrados estaticos
  const [restaurants, setRestaurants] = useState([
    { id: 1, name: "Restaurant A", description: "Description A" },
    { id: 2, name: "Restaurant B", description: "Description B" },
    { id: 3, name: "Restaurant C", description: "Description C" },
    { id: 4, name: "Restaurant D", description: "Description D" },
    { id: 5, name: "Restaurant E", description: "Description E" },
    { id: 6, name: "Restaurant F", description: "Description F" },
    { id: 7, name: "Restaurant G", description: "Description G" },
    { id: 8, name: "Restaurant H", description: "Description H" },
    { id: 9, name: "Restaurant I", description: "Description I" },
    { id: 10, name: "Restaurant J", description: "Description J" },
  ]);

  return (
    <div>
      <h1> BIENVENIDO A NUESTROS RESTAURANTES</h1>
      <div className="contenido_cards">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            id={restaurant.id}
            name={restaurant.name}
            description={restaurant.description}
          />
        ))}
      </div>
    </div>
  );
}

export default PageRestaurantes;
