import React, { useState } from "react";
import EmpTable from './EmpTable';
import {Col,Button,Form,Row,Container} from 'react-bootstrap';
export default function Employee(){
 
  const [Eid, setEid] = useState("");
  const [Emp_name, setname] = useState("");
  const [Mobile, setmobile] = useState("");
  const [city, setcity] = useState("");
  const [address, setaddress] = useState("");
  const [joiningDate, setdate] = useState("");

  async function inserdataemp() {
    let empdata = {Eid,Emp_name, Mobile, city, address, joiningDate };
    console.log(empdata);

    let output = await fetch(
      "http://localhost:2000/api/insert-employee",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(empdata),
      }
    
    );
    output = await output.JSON();
    console.log(output);
  }

  return (
    <div >
        <div style={{backgroundColor:"blueviolet"}}>Employee Register</div>
    <div> 
    <Container>
  <Row>
    <Col> <Form >
    <Form.Label >Employee id</Form.Label>
                <Form.Control type="text" placeholder="Enter employee id"
                   value = {Eid}
                       onChange={(e)=>setEid(e.target.value)} />

       <Form.Label >Employee name</Form.Label>
                <Form.Control type="text" placeholder="Enter employee name"
                   value = {Emp_name}
                       onChange={(e)=>setname(e.target.value)} />

      <Form.Label>Mobile</Form.Label>
               <Form.Control type="text" placeholder="Enter mobile no"
                   value = {Mobile} 
                       onChange={(e)=>setmobile(e.target.value)}/>

      <Form.Label>city</Form.Label>
               <Form.Control type="text" placeholder=" " 
                   value = {city} 
                      onChange={(e)=>setcity(e.target.value)}/>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Address</Form.Label>
               <Form.Control as="textarea" rows={3}  
                  value = {address} 
                     onChange={(e)=>setaddress(e.target.value)}/>
      </Form.Group> 

      <Form.Label>joining date</Form.Label>
      <Form.Control type="date" placeholder="" 
                value = {joiningDate}
                     onChange={(e)=>setdate(e.target.value)}/> <br/><br/>

      <Button onClick={inserdataemp} variant="primary" type="submit" id ="btn" >
           Submit
      </Button>
     </Form></Col>
    <Col>
    <EmpTable/>
  </Col>
 </Row>
</Container>
 </div>    
</div> 

  )
}
