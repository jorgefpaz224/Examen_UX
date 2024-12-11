import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function RestaurantCard(nombre_restaurante, descripcion_restaurante) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>EL NOMBRE DEL RESTAURANTE</Card.Title>
          <Card.Text>
            Aqui iria la descripcion
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default RestaurantCard