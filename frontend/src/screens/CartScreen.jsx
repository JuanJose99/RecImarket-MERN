import { React, useContext } from "react";
import { Store } from "../store";
import { Row, Col } from "react-bootstrap/esm";
import MessageBox from "../components/message/message";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { FaPlusCircle, FaMinusCircle, FaTrash } from "react-icons/fa";

export default function CartScreen() {
  const baseURL = "http://localhost:3001";
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantify) => {
    const { data } = await axios.get(`${baseURL}/api/products/${item._id}`);
    if (data.countInStock < quantify) {
      window.alert("El producto esta fuera de stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantify },
    });
  };

  const removeItemHandler = (item) => {
    ctxDispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              No hay productos en el carrito.{" "}
              <Link to="/home">Ir a comprar</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row className="align-items-center">
                    <Col md={4}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded img-thumbnail"
                      ></img>{" "}
                      <Link to={`/product/${item.slug}`}>{item.name}</Link>
                    </Col>
                    <Col md={3}>
                      <Button
                        onClick={() =>
                          updateCartHandler(item, item.quantify - 1)
                        }
                        variant="ligth"
                        disable={item.quantity === 1}
                      >
                        <FaMinusCircle />
                        {/* <i className="fas fa-minus-circle"></i> */}
                      </Button>{" "}
                      <span>{item.quantity}</span>
                      <Button
                        onClick={() =>
                          updateCartHandler(item, item.quantify + 1)
                        }
                        variant="ligth"
                        disable={item.quantity === 1}
                      >
                        <FaPlusCircle />

                        <i className="fas fa-plus-circle"></i>
                      </Button>
                    </Col>
                    <Col md={3}>$ {item.price}</Col>
                    <Col md={2}>
                      <Button
                        onClick={() => removeItemHandler(item)}
                        variant="ligth"
                      >
                        <FaTrash />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantify, 0)} )
                    : ${cartItems.reduce((a, c) => a + c.price * c.quantify, 0)}
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    type="button"
                    variant="primary"
                    disabled={cartItems.length === 0}
                  >
                    {" "}
                    Ir a pagar
                  </Button>{" "}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
