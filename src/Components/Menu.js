import React from 'react'
import {Container,Nav,FormControl,Navbar,Form} from "react-bootstrap"
import { Link } from 'react-router-dom'
function Menu({search,setSearch,setZone,zone}) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Vacance</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    {zone ? <>
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to='/Home' onClick={()=>setZone(false)}>Home</Nav.Link>
        <Nav.Link as={Link} to='/List' onClick={()=>setZone(true)}>Our Tours</Nav.Link>
    
        <Nav.Link as={Link} to='/Add' onClick={()=>setZone(false)}>
          Add New Tour
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e)=> setSearch(e.target.value)} value={search}
        />
        
      </Form>
    </>:
    
    <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to='/Home' onClick={()=>setZone(false)}>Home</Nav.Link>
        <Nav.Link as={Link} to='/List' onClick={()=>setZone(true)}>Our Tours</Nav.Link>
    
        <Nav.Link as={Link} to='/Add' onClick={()=>setZone(false)}>
          Add New Tour
        </Nav.Link>
      </Nav>
   
    
    }
      
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Menu
