//import React from 'react'
import {  Form,Button, Container,Row,Col } from 'react-bootstrap';
import React,{useState} from 'react';
import DegiTable from './DegiTable';

export default function Designation() { 
    
  const [Eid, setname] = useState("");
  const [Dasignation, setDasignation] = useState("");
  const [Department, setDepartment] = useState("");

  async function save() {
    let empdata = {Eid,Dasignation,Department};
    console.warn(empdata);

    let output = await fetch(
      "http://localhost:1000/api/insert-desi",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body:JSON.stringify(empdata),
      }
    
    );
    output = await output.JSON();
    console.log(output);
  }

  return (
    <div>Designation
         <div ><br/>
         <Container>
  <Row>
    <Col> 
    
    <Form>
           <Form.Label>Employee id</Form.Label>
           <Form.Control type="text" placeholder="" value = {Eid} onChange={(e)=>setname(e.target.value)} />

           <Form.Label>Designation</Form.Label>
           <Form.Control type="text" placeholder="" value = {Dasignation} onChange={(e)=>setDasignation(e.target.value)} />

            <Form.Label>Department</Form.Label>
            <Form.Control type="text" placeholder="" value = {Department} onChange={(e)=>setDepartment(e.target.value)}/> <br/><br/>
            
            <Button onClick={save} variant="primary" type="submit" id ="btn" >
           Submit
         </Button>
    </Form></Col>
    <Col xp={6}><DegiTable/></Col>
</Row>
</Container>

   
  </div>

    </div>
  )
}