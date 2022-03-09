//import './App.css';
import React from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from './component/Home';
import Login from './component/Login';
import  Heading  from "./component/Heading";
// import SideBar from './component/Sidebar/SideBar';

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
 import {Nav} from 'react-bootstrap';
import "./App.css";
import SidebarMenu from "./component/Sidebar/SideBar";

//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    
    <BrowserRouter>
    <div id ="div">
    <div>
      
        <Nav variant="tabs" defaultActiveKey="/home" style={{}}>
          <Nav.Item>
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link><Link to="/Login">Login</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link ><Link to="/Heading">Heading</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link ><Link to="/SideBar">SideBar</Link></Nav.Link>
          </Nav.Item>
        </Nav>

        <Routes>
          <Route path ='/' element={<Home/>}></Route>
          <Route path ='/Login' element={<Login/>}></Route>
          <Route path ='/Heading' element={<Heading/>}></Route> 
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
    
      </div>
      
   
  </div>
  </BrowserRouter>
  );
}

export default App;