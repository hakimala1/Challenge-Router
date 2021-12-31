import React from 'react'
import Carte from './Carte'
import '../App.css';
import {Button} from 'react-bootstrap'

import { Link } from 'react-router-dom';

function Liste({tab,setTab,search,setZone,zone}) {
    console.log(zone)

    return (
        <>
       
        <Link to={'/Home'}><Button onClick={()=>setZone(false)} variant='dark'>Go To homme</Button></Link>

        <div className='container'>

             {tab.filter(el=>el.ville.toUpperCase().includes(search.toUpperCase())).map((el,i)=><Carte el={el} key={el.id}tab={tab} setTab={setTab} setZone={setZone} zone={zone} /> )}
             {(tab.length<=0) &&  <button onClick={()=>window.location.reload()}>Refrech</button>}
        </div>
        </>
    )
}

export default Liste
