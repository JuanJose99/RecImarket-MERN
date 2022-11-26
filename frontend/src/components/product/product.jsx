import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Rating from "../rating/rating";
import { Store } from "../../store";
import axios from "axios";

function Products(props) {
  const baseURL = "http://localhost:3001";
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const { product } = props;

  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantify = existItem ? existItem.quantify + 1 : 1;
    const { data } = await axios.get(`${baseURL}/api/products/${product._id}`);
    if (data.countInStock < quantify) {
      window.alert("El producto esta fuera de stock");
      return;
    }

    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantify },
    });
  };

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
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <Card.Text className="text-primary fw-bold">
            ${product.price}
          </Card.Text>
          <Button onClick={addToCartHandler}>Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Products;
