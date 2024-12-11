import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";


import "./RestaurantCard.css";
//const [showInfo, setShowInfo] = useState(false);

/*funciones para abrir y cerrar la informacion de los restaurantes
const openInfo = () => {
  setShowInfo(true);
};

const closeInfo = () => {
  setShowInfo(false);
}*/


function RestaurantCard(key, nombre_restaurante, descripcion_restaurante) {
  return (
    <div className="Contenedor">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Text>
            <h3>ID DEL RESTAURANTE</h3>
          </Card.Text>
          <Card.Title>
            <h1>NOMBRE DEL RESTAURANTE</h1>
          </Card.Title>

          <Card.Text>
            <p>DESCRIPCION DEL RESTAURANTE</p>
          </Card.Text>
          <Button variant="primary" className="boton">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RestaurantCard;
