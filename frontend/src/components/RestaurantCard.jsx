import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./RestaurantCard.css";

function RestaurantCard(nombre_restaurante, descripcion_restaurante) {
  return (
    <div className="Contenedor">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>{nombre_restaurante}</Card.Title>
          <Card.Text>
            {descripcion_restaurante}
          </Card.Text>
          <Button variant="primary" className="boton">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RestaurantCard;
