import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Details = (props) => {
   
    const found =props.tab.find(el=>el.id==props.match.params.id)
    console.log(props)
    return (
        <div className='details'>
        {/* <a href="#" class="previous">&laquo; Previous</a> */}
           {/* <Button onClick={()=>{props.history.goBack();props.setZone(true);}} variant="dark">&laquo; Previous</Button> */}
           <Link to={'/Home'}><Button onClick={()=>props.setZone(false)} variant='dark'>Go To homme</Button></Link>
               <Card className='bg-dark text-white'>
               <Card.Title>{found.ville}</Card.Title>
       <Card.Body>
           
         <Card.Text>
                   {found.description}
         </Card.Text>
       </Card.Body>
       <Card.Img variant="top" src={found.image} height="100%" />
     </Card>
           
        </div>
    )
}

export default Details
