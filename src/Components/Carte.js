import React, { useState } from 'react'
import{Card,Button, ListGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../App.css';

function Carte({el:{id,ville,description,image},  tab, setTab,setZone}) {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
      };
      const del=(x)=>{setTab(tab.filter(el=>el.id!==x))

      }
    return (
        <div>
            <Card style={{ width: '400px', height:"100%" }}className='bg-dark text-white' >
  <Card.Img variant="top" src={image} height="100%" />
  <Card.Body>
    <Card.Title>{ville}</Card.Title>
    
    <Card.Footer>
    <ListGroup className="list-group-flush">
    {isReadMore ? description.slice(0, 50) : description}
      <span onClick={toggleReadMore} style={{color:'blue'}}>
        {isReadMore ? "...read more" : " show less"}
        
        </span>

  </ListGroup>
    </Card.Footer>
    <Link to={`/info/${id}`}><Button variant="info">Details</Button></Link>
  </Card.Body>
  <Button variant="danger" onClick={()=>{del(id) ;setZone(false); }}>Delete</Button>
</Card>
        </div>
    )
}

export default Carte
