import './App.css';
import React from "react";
import {BrowserRouter,Routes,Route, Link} from "react-router-dom";
import Home from './component/Home';
import Designation from './component/Designation';
import Employee from './component/Employee';
import Allrecord from './component/All_Record';
import {Nav} from 'react-bootstrap';



function App() {
  return (
    
  <BrowserRouter>
    <div id ="div">
    <div>
      
        <Nav variant="tabs" defaultActiveKey="/home" style={{backgroundColor:"orange"}}>
          <Nav.Item>
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link><Link to="/Employee">Employee register</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link ><Link to="/Designation">Designation</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link><Link to="/All_Record">All Record</Link></Nav.Link>
          </Nav.Item>   
        </Nav>
        <Routes>
          <Route path ='/' element={<Home/>}></Route>
          <Route path ='/Employee' element={<Employee/>}></Route>
          <Route path ='/Designation' element={<Designation/>}></Route>
          <Route path ='/All_record' element={<Allrecord/>}></Route>
        </Routes>
      </div>
      
   
  </div>
  </BrowserRouter>
  
  );
}

export default App;