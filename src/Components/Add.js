import React, { useState } from 'react'
import {Button,Form,FloatingLabel} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Add(props) {
    const [ville,setville]=useState('')
    const [description,setDescription]=useState('')
    const [path,setPath]=useState('')
    const Ajouter =()=>{
        props.setTab([...props.tab, {
            id:Math.random,
            ville:ville,
            description:description,
            image: path
        }])
    }
    console.log(props.zone)

    return (
        <div>
                       {/* <Button onClick={()=>{props.history.goBack();props.setZone(true);}} variant="dark">&laquo; Previous</Button><br/> */}
                       <Link to={'/Home'}><Button onClick={()=>props.setZone(false)} variant='dark'>Go To homme</Button></Link>

            <h1>ADD</h1>
            <Form className='add'>
            <>
            
  <FloatingLabel controlId="floatingTextarea" label="Ville" className="mb-3">
    <Form.Control as="textarea" placeholder="Leave a comment here" onChange={(e)=>setville(e.target.value)} value={ville}/>
  </FloatingLabel>
  <FloatingLabel controlId="floatingTextarea" label="URL img" className="mb-3">
    <Form.Control as="textarea" placeholder="Leave a comment here"  onChange={(e)=>setPath(e.target.value)} value={path}/>
  </FloatingLabel>
  <FloatingLabel controlId="floatingTextarea2" label="Description">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
      onChange={(e)=>setDescription(e.target.value)} value={description}
    />
  </FloatingLabel><br/>
  <Link to={'/List'}>
  <Button variant="success" onClick={()=>Ajouter()}>
    Submit
  </Button>
  </Link>
</>


 
</Form>
        </div>
    )
}

export default Add
