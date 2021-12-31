import React from 'react'
import { Carousel } from 'react-bootstrap'

function Home({setZone,zone}) {
    console.log(zone)
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Paris</h3>
      <p>Nulla vitae elit lib ero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/3779165/pexels-photo-3779165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Barcelone</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/3021382/pexels-photo-3021382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Rome</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Home
