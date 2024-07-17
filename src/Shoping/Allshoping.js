/* eslint-disable jsx-a11y/alt-text */

import { CartProvider, useCart } from "react-use-cart";
import Navbar from "../Navbar";
import ApiData from "./ApiData";
import { Col, Container, Row } from "reactstrap";
function Page() {
  const { addItem } = useCart();


  return (
    <div>
      <Container>
        <Row>
        {ApiData.map((item) => (
        <Col md='4' className ='text-center mb-7 p-5' key={item.id}>
          <img src={item.images[0]} className='img-fluid w-80 ' style={{height:"350px"}}></img>
          <h4>{item.title}</h4>
          <h4>{item.price}$</h4>
          <button className="btn btn-success" onClick={() => addItem(item)}>Add to cart</button>
        </Col>
      ))}
        </Row>
      </Container>
     
    </div>
  );
}














function Allshoping() {
  return (
    <CartProvider>
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <Page />
      {/* <Cart /> */}
    </CartProvider>
  );
}
export default Allshoping