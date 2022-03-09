import React, { useState, useEffect } from 'react'
import { Table, Button,Form,Container,Col,Row} from 'react-bootstrap';

export default function All_Record() {
  const [Eid,setEid]= useState("");
  const [Emp_name, setname] = useState("");
  const [Mobile, setmobile] = useState("");
  const [address, setaddress] = useState("");
  const [information, setData] = useState([]);// usestate hooks to perameter one is data seccond is usestate , data store data and state store state,blank array use karte he[]
  useEffect(() => {
user();
  }, []);


function user(){
  const api = "http://localhost:2000/api/emp-desi";
  const fatchdata = async () => {
    //exception is like a error its two types of error syntexerror and runtime error and try catch handel this type of error        
  try{
      const response1 = await fetch(api);
      const data = await response1.json(); // api ka data convert karne ke liye res.json methord ka use karte he
      setData(data.response);
      //console.log(Data);
  }
  catch(error){
      console.log(error);
    }
  }
  fatchdata();
}

//delete record

  function deleteUser(Eid)
  {
    fetch(`http://localhost:2000/api/edit-employee-delete/${Eid}`,{
      method:"DELETE"
    }).then((result)=>{
      result.json().then((res)=>{
        console.warm(res);
        user();
      });
    });
  }

  //update record
  function selectEmp(id)
  {
    let item=information[id-1];
    setname(item.Emp_name)
        setmobile(item.Mobile)
        setaddress(item.address)
        setEid(item.Eid)
      
  }
  function updateEmp(){
    let item = {Emp_name,Mobile,address}
   
    fetch(`http://localhost:2000/api/${Eid}`,{
      method:"PUT",
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result)=>{
      result.json().then((res)=>{
        // console.warm(res);
        user();
      });
    });
  }
  return(
    < >
      <div style={{background:'red'}}> All_Record</div>
        {
         <Table striped bordered hover>
         <thead>
           <tr>
             <th>Id</th>
             <th>Name</th>
             <th>Mobile</th>
             <th>City</th>
             <th>Address</th>
             <th>JoiningDate</th>
             <th>Designation</th>
             <th>Department</th>
             <th>Action</th>
             <th>DELETE</th>
           </tr>
           </thead>
 
         {information.map((item) => (
           <tbody>
             <tr >
               <td>{item.Eid}</td>
               <td>{item.Emp_name}</td>
               <td>{item.Mobile}</td>
               <td>{item.city}</td>
               <td>{item.address}</td>
               <td>{item.joiningDate}</td>
               <td>{item.Dasignation}</td>
               <td>{item.Department}</td>
               <td>
              <Button variant="outline-success" onClick={()=>selectEmp(item.Eid)}>Edit</Button><br></br>
              </td>
              <td>
              <Button variant="outline-danger" onClick ={()=>deleteUser(item.Eid)}>Remove</Button>
                </td> 
             </tr>
           </tbody>

         )
         )
         }
 
       </Table>
        }

        <div>
        <Container>
  <Row>
    <Col></Col>
    <Col><Form style={{background:''}}>
   
  <Form.Label >Employee name</Form.Label>
                <Form.Control type="text" placeholder="Enter employee name"
                   value = {Emp_name}
                       onChange={(e)=>{setname(e.target.value)}} />

  
  <Form.Label>Mobile</Form.Label>
               <Form.Control type="text" placeholder="Enter mobile no"
                   value = {Mobile} 
                       onChange={(e)=>{setmobile(e.target.value)}}/>
  
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Address</Form.Label>
               <Form.Control as="textarea" rows={3}  
                  value = {address} 
                     onChange={(e)=>{setaddress(e.target.value)}}/>
      </Form.Group> 

  <Button variant="primary" type="submit"
   onClick={updateEmp}
  >
    Update
  </Button>
</Form></Col>
    <Col></Col>
  </Row>
</Container>
        
        </div>
    </>
  )
}