/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Navbar from '../Navbar'
import { CartProvider, useCart } from 'react-use-cart';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
function Cart() {
    const {
      isEmpty,
      totalUniqueItems,
      totalItems,
      items,
      updateItemQuantity,
      removeItem,
      cartTotal,
      emptyCart
    } = useCart();
  
    if (isEmpty) {
    return(
    <h3 className="text-center ">Your cart is empty</h3>
    )}
  
  
  
    return (
      <div>
        <div className="d-flex align-items-center justify-content-center  ">
        <h3 className="text-center">Cart ({totalUniqueItems})</h3>
        <button onClick={()=>emptyCart()} className="btn btn-danger ml-2"> Empty cart</button>
        </div>
        
        <Container>
          <Row>
            <Col md="10" className="m-auto">
            <table className="table table-dark text-center">
  
            <thead>
                        <tr>
                          <th>image</th>
                          <th>Name</th>
                          <th>Quantity</th>
                          <th>price</th>
                          <th>operation</th>
    
    
                        </tr>
              </thead>
  
            <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.images[0]} style={{width:"70px"}}></img>
              </td>
              <td>{item.title} </td>
              <td>{item.quantity}</td>
              <td>{item.price*item.quantity}</td>
             <td>
              <button className="btn btn-warning"
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <button className="btn btn-success mx-2"
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button className="btn btn-danger"
               onClick={() => removeItem(item.id)}>&times;</button>
              </td>
            </tr>
          ))}
  
                      <tr>
                        <td>total</td>
                        <td>---------------</td>
                        <td>{totalItems}</td>
                        <td>{cartTotal}</td>
                        <td>
                         
                          <Link to="/Shopping" className="btn btn-primary">Contanuie Shoping</Link>
                        </td>
                      </tr>
    
          </tbody>
        </table>
            </Col>
          </Row>
        </Container>
       
      </div>
    );
  }
function Allcart() {
  return (
    <CartProvider>
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Cart/>

    </CartProvider>
  )
}

export default Allcart
