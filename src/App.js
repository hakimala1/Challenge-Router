import { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Add from './Components/Add';
import Details from './Components/Details';
import Home from './Components/Home';
import Liste from './Components/Liste';
import Menu from './Components/Menu';

function App() {
  const [search,setSearch]=useState('')
  const [zone,setZone]=useState()

  const[tab,setTab]= useState([
    {id: 1,
       ville :" Paris ",
     description:"aaaaaa aaaaaa aaaaaaaa aaa aa aaa aaaa aaa aaa aaaaa aaaa aaaaaa aaaaa aaaaa aaaaaaa aaaaaaa aaaaaa aaaaaaa aa aaaa aaaa aaaa aaaa a aaaa aa aaa aa aaaa aaa aa aaaaa aaaaa aa aa aaaaa aa aaaa aaaaa aa aaaaa aa abb bb",
     image:"https://images.pexels.com/photos/3879160/pexels-photo-3879160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {id: 2, ville :" Barcelone ",
    description:"aaaaaa aaaaaa aaaaaaaa aaa aa aaa aaaa aaa aaa aaaaa aaaa aaaaaa aaaaa aaaaa aaaaaaa aaaaaaa aaaaaa aaaaaaa aa aaaa aaaa aaaa aaaa a aaaa aa aaa aa aaaa aaa aa aaaaa aaaaa aa aa aaaaa aa aaaa aaaaa aa aaaaa aa abb bb",
    image:"https://images.pexels.com/photos/4947788/pexels-photo-4947788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {id: 3, ville :" Rome ",
    description:"aaaaaa aaaaaa aaaaaaaa aaa aa aaa aaaa aaa aaa aaaaa aaaa aaaaaa aaaaa aaaaa aaaaaaa aaaaaaa aaaaaa aaaaaaa aa aaaa aaaa aaaa aaaa a aaaa aa aaa aa aaaa aaa aa aaaaa aaaaa aa aa aaaaa aa aaaa aaaaa aa aaaaa aa abb bb",
    image:"https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
  ])
  return (
    <div className="App">
   
      <Menu  search={search} setSearch={setSearch} zone={zone} setZone={setZone}></Menu>
      <Route path={'/Home' } render={()=><Home zone={zone} setZone={setZone}/>}/>
      <Route path={'/' } exact render={()=><Home zone={zone} setZone={setZone}/>}/>
      <Route path={'/List'} render={()=><><Liste  search={search} setSearch={setSearch} tab={tab} setTab={setTab}zone={zone} setZone={setZone}></Liste></>}/>
      <Route path={'/Add'} render={(props)=><Add {...props} tab={tab} setTab={setTab} zone={zone} setZone={setZone}/>}/>
      {/* <Route path={'/Info/:id'} render={(props)=><Details {...props} tab={tab} setTab={setTab}></Details>}/> */}
      <Route path={'/info/:id'} render={(props)=><Details tab={tab} {...props} zone={zone} setZone={setZone}></Details>}></Route>

    </div>
  );
}

export default App;
