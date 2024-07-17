/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import Navbar from '../Navbar'
import axios from 'axios'
import { Container, Row,Col } from 'reactstrap'

export class Product extends Component {
  state ={
    products : []
  }
  componentDidMount(){
    axios.get('/js/Api.json')
    .then((item)=>{
        console.log(item)
        this.setState(
            {
                products : item.data
            }
        )
    })
  }
  render() {
    return (
      <div>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <Container >
            < Row  >
            {this.state.products.map ((item)=> 
            <Col md= '4'  className ='text-center mb-4 p-5' key={item.recipe_id}>
                <img  src={item.images[0]}  className='img-fluid ' style={{height:"350px"}}></img>
                <br/>
                <h3>{item.title}</h3>
                {/* <h5>{item.description}</h5> */}

            </Col>
        )}
            </Row>
        </Container>
    </div>
    )
  }
}

export default Product
