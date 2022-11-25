import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function products(props) {
  const { product } = props;
  return (
    <div>
      <Card className="text-center">
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "10rem" }}
          />
        </Link>
        <Card.Body>
          <Card.Title className="text-success">{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text className="text-primary fw-bold">
            ${product.price}
          </Card.Text>
          <Button>Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
